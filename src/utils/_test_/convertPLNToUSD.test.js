import { convertPLNToUSD } from '../convertPLNToUSD';


describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(7)).toBe('$2.00');
    expect(convertPLNToUSD(3.5)).toBe('$1.00');
    
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('10')).toBeNaN();
  });

  it('should receive NaN when input does not any arguments', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

   it('should return "Error" when input is different than number and string', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
});

  it('should return zero when input is lower than zero', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-56)).toBe('$0.00');
});
  
 
});