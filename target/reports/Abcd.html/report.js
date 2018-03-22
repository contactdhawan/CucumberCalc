$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/My.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Calculator",
  "description": "As a user\r\nI want to use a calculator to add numbers\r\nSo that I don\u0027t need to add myself",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Add two numbers -2 \u0026 3",
  "description": "",
  "id": "calculator;add-two-numbers--2-\u0026-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I add -2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the result should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorTest.i_have_a_calculator()"
});
formatter.result({
  "duration": 101329900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "CalculatorTest.i_add_and_neg_pos(int,int)"
});
formatter.result({
  "duration": 1822489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "CalculatorTest.the_result_should_be(int)"
});
formatter.result({
  "duration": 1162098,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Add two numbers 10 \u0026 15",
  "description": "",
  "id": "calculator;add-two-numbers-10-\u0026-15",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I add 10 and 15",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the result should be 25",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorTest.i_have_a_calculator()"
});
formatter.result({
  "duration": 30789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    },
    {
      "val": "15",
      "offset": 13
    }
  ],
  "location": "CalculatorTest.i_add_and(int,int)"
});
formatter.result({
  "duration": 107368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 21
    }
  ],
  "location": "CalculatorTest.the_result_should_be(int)"
});
formatter.result({
  "duration": 127894,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Add two numbers 99 \u0026 -99",
  "description": "",
  "id": "calculator;add-two-numbers-99-\u0026--99",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I add 99 and -99",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the result should be 0",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorTest.i_have_a_calculator()"
});
formatter.result({
  "duration": 40263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 6
    },
    {
      "val": "99",
      "offset": 14
    }
  ],
  "location": "CalculatorTest.i_add_and_pos_neg(int,int)"
});
formatter.result({
  "duration": 128684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "CalculatorTest.the_result_should_be(int)"
});
formatter.result({
  "duration": 93157,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Add two numbers -1 \u0026 -10",
  "description": "",
  "id": "calculator;add-two-numbers--1-\u0026--10",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I add -1 and -10",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the result should be -11",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorTest.i_have_a_calculator()"
});
formatter.result({
  "duration": 46973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "CalculatorTest.i_add_and_neg_neg(int,int)"
});
formatter.result({
  "duration": 143289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 22
    }
  ],
  "location": "CalculatorTest.the_result_should_be_neg(int)"
});
formatter.result({
  "duration": 99868,
  "status": "passed"
});
});