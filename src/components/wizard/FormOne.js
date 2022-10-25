import React from "react";
import { Form } from "usetheform";
import Text from "./../fields/Text";
import GenderSelection from "./../fields/GenderSelection";
import Number from "./../fields/GenderSelection";
import Reset from "./../buttons/Reset";

export default function FormOne(props) {
  return (
    <Form {...props}>
      <Text label="First Name" name="name" placeholder="Type a name..." />
      <Text
        label="Last Name"
        name="lastname"
        placeholder="Type a last name..."
      />
      
      <Number label="Phone Number" name="number" placeholder="Type number..." />
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Next
          </button>
        </div>
        <div className="control">
          <Reset />
        </div>
      </div>
    </Form>
  );
}
