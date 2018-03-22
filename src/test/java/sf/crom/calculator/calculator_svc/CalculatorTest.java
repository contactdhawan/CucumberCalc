package sf.crom.calculator.calculator_svc;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorTest {
	Calculator calc;

	int result;

	@Given("^I have a calculator$")
	public void i_have_a_calculator() throws Throwable {
		calc = new CalculatorImpl();
	}

	@When("^I add (\\d+) and (\\d+)$")
	public void i_add_and(int arg1, int arg2) throws Throwable {
		result = calc.sum(arg1, arg2);
	}

	@Then("^the result should be (\\d+)$")
	public void the_result_should_be(int arg1) throws Throwable {
		assertEquals(arg1, result);
	}
	
	@When("^I add -(\\d+) and (\\d+)$")
	public void i_add_and_neg_pos(int arg1, int arg2) throws Throwable {
		result = calc.sum(arg1*-1, arg2);
	}

	@When("^I add (\\d+) and -(\\d+)$")
	public void i_add_and_pos_neg(int arg1, int arg2) throws Throwable {
		result = calc.sum(arg1, arg2*-1);
		}

	@When("^I add -(\\d+) and -(\\d+)$")
	public void i_add_and_neg_neg(int arg1, int arg2) throws Throwable {
		result = calc.sum(arg1, arg2);
		}

	@Then("^the result should be -(\\d+)$")
	public void the_result_should_be_neg(int arg1) throws Throwable {
	    assertEquals(arg1, result);
	}



}
