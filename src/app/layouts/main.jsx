import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";

const Main = () => {
    window.onload = function () {
        const products = Array.prototype.slice.call(document.querySelectorAll('.product'));
        products.forEach((product) => {
            const checkbox = product.querySelector('input[type=checkbox]');
            const buy = product.querySelector('.product-buy');
            const card = product.querySelector('.product-card');
            const heading = product.querySelector('.product-heading');
            const productTagline = product.querySelector('.product-tagline');
            const productTaglineTitle = product.querySelector('.product-tagline-title');
            let productIsSelected = [];

            const handlerSatusProduct = () => {
                checkbox.hasAttribute('checked');
                product.classList.toggle('is-selected');
                buy.classList.toggle('visually-hidden');
                heading.classList.toggle('visually-hidden');

                productIsSelected = Array.prototype.slice.call(document.querySelectorAll(".is-selected"))

                const removeMouse = () => {
                    productTagline.classList.remove('visually-hidden');
                    productTaglineTitle.classList.add('visually-hidden');
                }
                removeMouse()

                const mouseleaveVisuallyHidden = () => {
                    productTagline.classList.remove('visually-hidden');
                    productTaglineTitle.classList.add('visually-hidden');

                    if (productIsSelected.length === 0) {
                        removeMouse()
                        card.removeEventListener('mouseleave', mouseleaveVisuallyHidden)
                    }
                }

                const removeMouseVisuallyHidden = () => {
                    productTagline.classList.remove('visually-hidden');
                    productTaglineTitle.classList.remove('visually-hidden');
                }

                const mouseenterVisuallyHidden = () => {
                    productTagline.classList.add('visually-hidden');
                    productTaglineTitle.classList.remove('visually-hidden');

                    if (productIsSelected.length === 0) {
                        removeMouse()
                        card.removeEventListener('mouseenter', removeMouseVisuallyHidden)
                    }
                }

                if (productIsSelected.length > 0) {
                    card.addEventListener('mouseleave', mouseleaveVisuallyHidden)
                    card.addEventListener('mouseenter', mouseenterVisuallyHidden)
                }
            };

            if (checkbox.hasAttribute('disabled')) {
                product.classList.add('is-disabled');
                buy.innerHTML = product.dataset.disabled;
            }

            card.addEventListener('click', handlerSatusProduct);
            checkbox.addEventListener('change', handlerSatusProduct);
        });
    }

    return (
        <>
            <div className="main-container mt-5">
                <h1 className="main-title">
                    Ты сегодня покормил кота?
                </h1>
                <Row xxl={3} xl={3} md={2} className="g-4 d-flex justify-content-center m-0">
                    <Col className="d-flex justify-content-center">
                        <Card>
                            <section className="product">
                                <Card.Body className="p-0">
                                    <div className="product-card">
                                        <Card.Text className="product-tagline">
                                            Сказочное заморское яство
                                        </Card.Text>
                                        <Card.Text className="product-tagline-title visually-hidden">
                                            Котэ не одобряет?
                                        </Card.Text>
                                        <h3 className="product-title">Нямушка
                                            <span className="product-fill">с фуа-гра</span>
                                        </h3>
                                        <ul className="product-set">
                                            <li className="product-set-item"><b>10</b> порций</li>
                                            <li className="product-set-item">мышь в подарок</li>
                                        </ul>
                                        <div className="product-weight">0,5 <span className="product-units">кг</span>
                                        </div>
                                        <svg className="product-bg" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
                                            <path fillRule="evenodd" strokeWidth="4"
                                                  d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z"/>
                                        </svg>
                                    </div>
                                    <Card.Text className="product-buy">
                                        Чего сидишь? Порадуй котэ,
                                        <label className="label" htmlFor="foiegras">
                                            купи.
                                            <input className="visually-hidden" type="checkbox" name="foiegras"
                                                   value="foiegras" id="foiegras"/>
                                        </label>
                                    </Card.Text>
                                    <Card.Text className="product-heading visually-hidden">
                                        Печень утки разварная с артишоками.
                                    </Card.Text>
                                </Card.Body>
                            </section>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card>
                            <section className="product">
                                <Card.Body className="p-0">
                                    <div className="product-card">
                                        <Card.Text className="product-tagline">
                                            Сказочное заморское яство
                                        </Card.Text>
                                        <Card.Text className="product-tagline-title visually-hidden">
                                            Котэ не одобряет?
                                        </Card.Text>
                                        <h3 className="product-title">Нямушка
                                            <span className="product-fill">с рыбой</span>
                                        </h3>
                                        <ul className="product-set">
                                            <li className="product-set-item"><b>40</b> порций</li>
                                            <li className="product-set-item"><b>2</b> мыши в подарок</li>
                                        </ul>
                                        <div className="product-weight">2 <span className="product-units">кг</span>
                                        </div>
                                        <svg className="product-bg" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
                                            <path fillRule="evenodd" strokeWidth="4"
                                                  d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z"/>
                                        </svg>
                                    </div>
                                    <Card.Text className="product-buy">
                                        Чего сидишь? Порадуй котэ,
                                        <label className="label" htmlFor="fish">
                                            купи.
                                            <input className="visually-hidden" type="checkbox" name="fish" value="fish"
                                                   id="fish"/>
                                        </label>
                                    </Card.Text>
                                    <Card.Text className="product-heading visually-hidden">
                                        Головы щучьи с чесноком да свежайшая сёмгушка.
                                    </Card.Text>
                                </Card.Body>
                            </section>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card>
                            <section className="product" data-disabled="Печалька, с курой закончился">
                                <Card.Body className="p-0">
                                    <div className="product-card">
                                        <Card.Text className="product-tagline">
                                            Сказочное заморское яство
                                        </Card.Text>
                                        <h3 className="product-title">Нямушка
                                            <span className="product-fill">с курой</span>
                                        </h3>
                                        <ul className="product-set">
                                            <li className="product-set-item"><b>100</b> порций</li>
                                            <li className="product-set-item"><b>5</b> мышей в подарок</li>
                                        </ul>
                                        <div className="product-weight">5 <span className="product-units">кг</span>
                                        </div>
                                        <svg className="product-bg" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
                                            <path fillRule="evenodd" strokeWidth="4"
                                                  d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z"/>
                                        </svg>
                                    </div>
                                    <Card.Text className="product-buy">
                                        Чего сидишь? Порадуй котэ,
                                        <label className="label" htmlFor="chicken">
                                            купи.
                                            <input className="visually-hidden" type="checkbox" name="chicken"
                                                   value="chicken" id="chicken" disabled/>
                                        </label>
                                    </Card.Text>
                                    <Card.Text className="product-heading visually-hidden">
                                        Филе из цыплят с трюфелями в бульоне.
                                    </Card.Text>
                                </Card.Body>
                            </section>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Main;
