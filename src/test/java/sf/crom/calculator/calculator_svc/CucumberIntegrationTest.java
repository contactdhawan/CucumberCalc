package sf.crom.calculator.calculator_svc;

import static org.junit.Assert.assertEquals;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "classpath:Feature/My.feature" }, plugin = { "html:target/reports/Abcd.html" })
public class CucumberIntegrationTest {

	
}
