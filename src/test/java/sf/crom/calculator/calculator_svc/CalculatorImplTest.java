package sf.crom.calculator.calculator_svc;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

/*@RunWith(Parameterized.class)
public class CalculatorImplTest {

	int num1;
	int num2;
	int result;
	
	public CalculatorImplTest(int num1,int num2, int result){
		this.num1=num1;
		this.num2=num2;
		this.result=result;
	}
	
	@Parameters
	public static Collection<Integer[]> dataSet(){
		Integer[][] dataarray = {
				{10,5,15},
				{11,6,17},
				{-1,-2,-3}
		};
		return Arrays.asList(dataarray);
	}
	
	
	@Test
	public void testSum() {
		Calculator c = new CalculatorImpl();
		int actual = c.sum(num1, num2);
		assertEquals(result, actual);
	}
}
*/