import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <section id="faq-section">
            <div className='overlay pt-120 pb-120 '>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-9'>
                            <div className='section-header'>
                                <h4 className='sub-title'>A few things</h4>
                                <h3 className='title'>Clients Normally Ask Me:</h3>
                                <p>If you haven’t found an answer to your question, contact us</p>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-8 wow fadeInUp'>
                            <div class="accordion accordion-flush" id="accordionFlushExample ">
                                <div class="accordion-item mb-3 p-3 w-100">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            What is your work dicipline?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-3 p-3 w-100">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is your location & timezone?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-3 p-3 w-100">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How often can we communicate?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio doloribus cumque deleniti ducimus harum itaque voluptatibus reprehenderit, quam officia, assumenda voluptates officiis. Ea, pariatur deleniti magnam omnis illum ad saepe.</div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-5 p-3 w-100">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            What is your hourly rate?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio doloribus cumque deleniti ducimus harum itaque voluptatibus reprehenderit, quam officia, assumenda voluptates officiis. Ea, pariatur deleniti magnam omnis illum ad saepe.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;