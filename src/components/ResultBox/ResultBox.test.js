import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import {formatAmountInCurrency} from './../../utils/formatAmountInCurrency';



const testCasesAmount = [
    {amount: 101},
    {amount: 230},
    {amount: 360},
  ];

  for(const testObj of testCasesAmount) {

  describe('Component ResultBox', () => {
  
    it('should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />);
    });    
 
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`${formatAmountInCurrency(testObj.amount, 'PLN')} = ${formatAmountInCurrency(testObj.amount/3.5, 'USD')}`.replace(/\u00a0/g, ' '));

    });

    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`${formatAmountInCurrency(testObj.amount, 'USD')} = ${formatAmountInCurrency(testObj.amount*3.5, 'PLN')}`.replace(/\u00a0/g, ' '));

    }); 

    it('should render proper info about conversion when PLN -> PLN', () => {
      render(<ResultBox from ="PLN" to="PLN" amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`${formatAmountInCurrency(testObj.amount, 'PLN')} = ${formatAmountInCurrency(testObj.amount, 'PLN')}`.replace(/\u00a0/g, ' '));
    });

    it('should render proper info about conversion when USD -> USD', () => {
      render(<ResultBox from ="USD" to="USD" amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`${formatAmountInCurrency(testObj.amount, 'USD')} = ${formatAmountInCurrency(testObj.amount, 'USD')}`.replace(/\u00a0/g, ' '));
    });

  });

  cleanup()
}

const testCasesMinusAmount = [
    {amount: -1, from: 'PLN', to: 'USD' },
    {amount: -2, from: 'USD', to: 'PLN'},
    
];

  for(const testObj of testCasesMinusAmount) {

    it('should render proper info if value less then zero', () => {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={Number(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent('Wrong Value');

  });

    cleanup()
  }