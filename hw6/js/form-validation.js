/*
      Name: Peter Arias
      Email: peter_arias@student.uml.edu
      Affiliation: Student at UMass Lowell in 91.61 GUI Programming I
      Date: 11/11/2020
      Description: Using the jQuery Validation Plugin with Your Dynamic Table
      91.461 Assignment: Assignment No. 6
*/

$(document).ready(function() {
    var inputForm = document.getElementById("inputForm");
    // Initialize form validation on the input form
    $(inputForm).validate({

        // Rules object. Each input must follow the following rules.
        rules: {
            startMultiplier: {
                required: true,
                number: true,
                max: 50,
                min: -50
            },
            endMultiplier: {
                required: true,
                number: true,
                max: 50,
                min: -50
            },
            startMultiplicand: {
                required: true,
                number: true,
                max: 50,
                min: -50
            },
            endMultiplicand: {
                required: true,
                number: true,
                max: 50,
                min: -50
            }
        },

        // Messages object. If rules are not being followed, display message.
        messages: {
            startMultiplier: {
                required: "Please enter a starting multiplier",
                number: "Please only enter numbers",
                max: "Please enter a number less than 50",
                min: "Please enter a number greater than -50"
            },
            endMultiplier: {
                required: "Please enter an ending multiplier",
                number: "Please only enter numbers",
                max: "Please enter a number less than 50",
                min: "Please enter a number greater than -50"
            },
            startMultiplicand:{
               required: "Please enter a starting multiplicand",
               number: "Please only enter numbers",
               max: "Please enter a number less than 50",
               min: "Please enter a number greater than -50"
            },
            endMultiplicand: {
                required: "Please enter an ending multiplicand",
                number: "Please only enter numbers",
                max: "Please enter a number less than 50",
                min: "Please enter a number greater than -50"
            }
        },
        /* errorPlacement object. Place error message below the input field.
         * Source: https://stackoverflow.com/questions/4032865/jquery-how-to-use-errorplacement-for-a-specific-element
         */
        errorPlacement: function (errorMessage, element) {
            errorMessage.addClass("errorMessage");
            errorMessage.insertAfter(element);
        },

        // Upon submission, check if user inputs need to be swapped and then create the table.
        submitHandler: function () {
            checkForSwap();
            createTable();
        }
    });
});