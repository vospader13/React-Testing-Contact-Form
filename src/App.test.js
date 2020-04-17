import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test('checks label First Name', () =>{
  const { getByText } = render(<ContactForm />);

  getByText(/First Name/i);  
});

test('checks label Last Name', () =>{
  const { getByText } = render(<ContactForm />);

  getByText(/Last Name/i);
});

test('checks label Email', () =>{
  const { getByText } = render(<ContactForm />);

  getByText(/email/i);
});

test('checks label Message', () =>{
  const { getByText } = render(<ContactForm />);

  getByText(/message/i);
});
  
test('tests Submit button not active', () =>{
  const { submit } = render(<ContactForm />);

  expect(submit).toBeFalsy();
});








// describe('data submission', () => {
//   const testValues = {
//     firstName: 'bill',
//     lastName: 'luo',
//     email: 'bluebill1049@hotmail.com',
//     handleSubmit: jest.fn(),
//   }
//   it('submit works', () => {
//     const component = render(
//       <ContactForm {...testValues} />
//     );
//     component.find('#submitButton').simulate('submit');
//     expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
//     expect(testValues.handleSubmit).toBeCalledWith({firstName: testValues.firstName, lastName: testValues.lastName, email: testValues.email});
//   });
// });


// test ("Supposed to check if form submitted correctly", () => {

//   const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'name' }));
//   const wrapper = mount(<ContactForm form="name" handleSubmit={handleSubmit}   />);
//   wrapper.find('form').simulate('onSubmit');
//   expect(handleSubmit).toBeCalledTimes(1);

// });


// test ("Supposed to test if text has been added to text box", () => {
//   const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
//   const wrapper = mount(<ContactForm form="test" handleSubmit={handleSubmit}   />);
//   const input = wrapper.find('input');
//   input.simulate('change', { target: { value: 'some text' } });
// });


// describe("makes sure all inputs are required", () => {
  
//   it("data is required", () => {
//     expect(register).toBeRequired;
//   })
   
// });

// describe ("makes sure handle submit is in the document", () => {
  
//   it("data is in the doc", () => {
//     expect(handleSubmit).toBeInTheDocument;
//   })
   
// });
