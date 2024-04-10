import React, { useEffect, useState } from "react";


function AddPassword() {
     /**pour les formulaires  */

     const [focused, setFocused] = useState(false);
     const [completed, setCompleted] = useState(false);
 
     const handleFocus = () => {
         setFocused(true);
         if (completed) {
             formAnim.faceDirection(1);
         } else {
             formAnim.faceDirection(0);
         }
     };
 
     const handleBlur = () => {
         formAnim.resetClasses();
     };
 
     const handleInputChange = () => {
         setCompleted(true);
         if (!inputRef.current.value) {
             setCompleted(false);
         }
         if (completed) {
             formAnim.faceDirection(1);
         } else {
             formAnim.faceDirection(0);
         }
     };
 
     const handleSubmit = () => {
         setFocused(true);
         formAnim.resetClasses();
 
         if (completed) {
             setSubmitDisabled(true);
             setTimeout(() => {
                 formAnim.faceDirection(4);
                 setInputValue('');
                 setCompleted(false);
 
                 setTimeout(() => {
                     setSubmitDisabled(false);
                     formAnim.resetClasses();
                 }, 2000);
             }, 1000);
         } else {
             setTimeout(() => {
                 formAnim.faceDirection(5);
 
                 setTimeout(() => {
                     formAnim.resetClasses();
                 }, 2000);
             }, 1000);
         }
     };
 
     const inputRef = React.createRef();
     const [submitDisabled, setSubmitDisabled] = useState(false);
     const [inputValue, setInputValue] = useState('');
 
     React.useEffect(() => {
         setTimeout(() => {
             if (!focused) {
                 inputRef.current.focus();
             }
         }, 2000);
     }, []);



     useEffect(() => {
        const formAnim = {
            $form: document.getElementById('form'),
            animClasses: ['face-up-left', 'face-up-right', 'face-down-left', 'face-down-right', 'form-complete', 'form-error'],
            resetClasses: function () {
                const $form = this.$form;
                this.animClasses.forEach(c => {
                    $form.classList.remove(c);
                });
            },
            faceDirection: function (d) {
                this.resetClasses();
                d = parseInt(d) < this.animClasses.length ? d : -1;
                if (d >= 0) {
                    this.$form.classList.add(this.animClasses[d]);
                }
            }
        };

        const $input = document.querySelectorAll('#email, #password');
        const $submit = document.getElementById('submit');
        let focused = false;
        let completed = false;

        $input.forEach(input => {
            input.addEventListener('focus', () => {
                focused = true;
                if (completed) {
                    formAnim.faceDirection(1);
                } else {
                    formAnim.faceDirection(0);
                }
            });

            input.addEventListener('blur', () => {
                formAnim.resetClasses();
            });

            input.addEventListener('input', () => {
                completed = true;
                $input.forEach(input => {
                    if (input.value === '') {
                        completed = false;
                    }
                });
                if (completed) {
                    formAnim.faceDirection(1);
                } else {
                    formAnim.faceDirection(0);
                }
            });
        });

        $submit.addEventListener('click', () => {
            focused = true;
            formAnim.resetClasses();
            if (completed) {
                $submit.disabled = true;
                setTimeout(() => {
                    formAnim.faceDirection(4);
                    $input.forEach(input => {
                        input.value = '';
                    });
                    completed = false;

                    setTimeout(() => {
                        $submit.disabled = false;
                        formAnim.resetClasses();
                    }, 2000);
                }, 1000);
            } else {
                setTimeout(() => {
                    formAnim.faceDirection(5);
                    setTimeout(() => {
                        formAnim.resetClasses();
                    }, 2000);
                }, 1000);
            }
        });

        setTimeout(() => {
            if (!focused) {
                $input[0].focus();
            }
        }, 2000);

        // Clean-up function
        return () => {
            // Detach event listeners or perform any other clean-up
        };
    }, []); // Empty dependency array means the effect runs only once after the initial render
    return (
        <div>
            <form id="form">
                <div className="form">
                    <div className="field email">
                        <div className="icon" />
                        <input
                            ref={inputRef}
                            className="input"
                            type="email"
                            id="email"
                            placeholder="Domaine"
                            autoComplete="off"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleInputChange}

                        />
                    </div>
                    <div className="field password">
                        <div className="icon" />
                        <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        className="button"
                        id="submit"
                        onClick={handleSubmit}
                        disabled={submitDisabled}
                    >
                        AJOUTER
                        <div className="side-top-bottom" />
                        <div className="side-left-right" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddPassword;
