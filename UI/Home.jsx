import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Hero from "./Hero";
import Exercise from "./Exercise";
import Start from "./Start";

const Home = () => {
  useEffect(() => {
    const showTermsAndConditions = async () => {
      const { value: accept } = await Swal.fire({
        title: "Terms and conditions",
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: "I agree with the terms and conditions",
        confirmButtonText: 'Continue&nbsp;<i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && "You need to agree with T&C";
        },
      });

      if (accept) {
        Swal.fire("You agreed with T&C :)");
      }
    };

    showTermsAndConditions();
  }, []);

  return (
    <>
      <Hero />
      <Exercise />
      <Start />
    </>
  );
};

export default Home;
