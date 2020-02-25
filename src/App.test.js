import React from "react";
import { render } from "@testing-library/react";
import App, { ContactForm } from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

describe('data submission', () => {
  const testValues = {
    firstName: 'bill',
    lastName: 'luo',
    email: 'bluebill1049@hotmail.com',
    handleSubmit: jest.fn(),
  }
  it('submit works', () => {
    const component = render(
      <ContactForm {...testValues} />
    );
    component.find('#submitButton').simulate('submit');
    expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
    expect(testValues.handleSubmit).toBeCalledWith({firstName: testValues.firstName, lastName: testValues.lastName, email: testValues.email});
  });
});


test ("Supposed to check if form submitted correctly", () => {

  const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'name' }));
  const wrapper = mount(<ContactForm form="name" handleSubmit={handleSubmit}   />);
  wrapper.find('form').simulate('onSubmit');
  expect(handleSubmit).toBeCalledTimes(1);

});


test ("Supposed to test if text has been added to text box", () => {
  const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
  const wrapper = mount(<ContactForm form="test" handleSubmit={handleSubmit}   />);
  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'some text' } });
});


describe("makes sure all inputs are required", () => {
  
  it("data is required", () => {
    expect(register).toBeRequired;
  })
   
});

// describe ("makes sure handle submit is in the document", () => {
  
//   it("data is in the doc", () => {
//     expect(handleSubmit).toBeInTheDocument;
//   })
   
// });
