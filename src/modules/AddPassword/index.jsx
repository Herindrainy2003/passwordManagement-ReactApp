import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AddPassword() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    /**Stocker nos donnes dans local storage */
    const onSubmit = (result) => {
        const olData = (JSON.parse(localStorage.getItem('mydata'))) || []; /**recuperer tous les donnes du localstorage  */
        olData.push(result) //*ajoutez notre nouveau donnes//
        localStorage.setItem('mydata', JSON.stringify(olData));
        reset();
        window.location.reload();
    }
    /**Le javascript de notre formulaires 3D */
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

        // $submit.addEventListener('click', () => {
        //     focused = true;
        //     formAnim.resetClasses();
        //     if (completed) {
        //         $submit.disabled = true;
        //         setTimeout(() => {
        //             formAnim.faceDirection(4);
        //             $input.forEach(input => {
        //                 input.value = '';
        //             });
        //             completed = false;

        //             setTimeout(() => {
        //                 $submit.disabled = false;
        //                 formAnim.resetClasses();
        //             }, 2000);
        //         }, 1000);
        //     } else {
        //         setTimeout(() => {
        //             formAnim.faceDirection(5);
        //             setTimeout(() => {
        //                 formAnim.resetClasses();
        //             }, 2000);
        //         }, 1000);
        //     }
        // });

        setTimeout(() => {
            if (!focused) {
                $input[0].focus();
            }
        }, 2000);

        // Clean-up function
        return () => {
            // Detach event listeners or perform any other clean-up
        };
    }, []);
    return (
        <div>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form">
                    <div className="field email">
                        <div className="icon" />
                        <input
                            className="input"
                            type="text"
                            id="email"
                            placeholder="Domaine"
                            autoComplete="off"
                            {...register("domaine")}
                        />
                    </div>

                    <div className="field password">
                        <div className="icon" />
                        <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                        />
                    </div>

                    <button
                        className="button"
                        type="submit"
                        id="submit"
                        onClick={handleSubmit}
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
