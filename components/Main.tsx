import { Button, Card, Input, Text, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { ToastCenter } from "../utils/toast";


import one from '../public/assets/uno.png';
import cero from '../public/assets/cero.png';
import eight from '../public/assets/ocho.png';


export const Main = () => {


    const [secretCode, setSecretCode] = useState(0);
    const [password, setPassword] = useState('');
    const [render, setRender] = useState(0);
    const [hint, setHint] = useState(false);

    const [text, setText] = useState('');
    const [traduction, setTraduction] = useState('');

    useEffect(() => {
        let r: string | null = localStorage.getItem('render');
        console.log(r);
        if (r === null) {
            localStorage.setItem('render', '0')
        } else {
            setRender(parseInt(r));
        }

    }, [])

    const validateSecretCode = () => {
        if (secretCode === 2108) {
            setRender(1);
            localStorage.setItem('render', '1')
        } else {
            setHint(true);
            ToastCenter.fire({
                icon: 'error',
                title: 'Código Secreto Incorrecto'
            })
        }
    }

    const validatePassword = () => {
        if (password === 'T34M0') {
            setRender(2);
            localStorage.setItem('render', '2')
        } else {
            ToastCenter.fire({
                icon: 'error',
                title: 'Clave Incorrecta'
            })
        }
    }

    const traducir = () => {
        if (text.length > 0) {
            setTraduction('Hay tres osos muy es candalosos. El Panda se ha ido. El de chaqueta roja no me quiso ayudar. El Grizzly algo te dira');
        } else {
            ToastCenter.fire({
                icon: 'warning',
                title: 'Debe introducir un lenguaje ancestral'
            })
        }
    }
    return (
        <>
            {render === 0 &&
                <div className="mb-5">
                    <div className="mt-3 mb-3 p-3 text-center">
                        <h2>
                            Hola mi Darling Piciosa.
                        </h2>
                        <h3 className="mt-5">
                            En una caja llena de sorpresas muchos secretos ocultos
                            están.
                        </h3>
                        <h3 className="mt-2">
                            A los pequeños detalles atenta siempre deberás estar ...
                        </h3>
                        <h3 className="mt-3">
                            Si abrir la puerta tu quieres
                            el código secreto tienes que ingresar
                        </h3>
                    </div>
                    {hint &&
                        <div className="mt-3 d-flex justify-content-center flex-column">
                            <div className="m-3">
                                <h5>💡¿En dónde he visto estas imagenes? </h5>
                            </div>
                            <div className="grid-hints">
                                <Card>
                                    <Card.Image
                                        src={'/assets/dos.png'}
                                        objectFit="cover"
                                        width="100%"
                                        height={100}
                                        alt="I"
                                    />
                                </Card>
                                <Card>
                                    <Card.Image
                                        src={'/assets/uno.png'}
                                        objectFit="cover"
                                        width="100%"
                                        height={100}
                                        alt="I"
                                    />
                                </Card>
                                <Card>
                                    <Card.Image
                                        src={'/assets/cero.png'}
                                        objectFit="cover"
                                        width="100%"
                                        height={100}
                                        alt="I"
                                    />
                                </Card>
                                <Card>
                                    <Card.Image
                                        src={'/assets/ocho.png'}
                                        objectFit="cover"
                                        width="100%"
                                        height={100}
                                        alt="I"
                                    />
                                </Card>
                            </div>
                        </div>
                    }
                    <div className="mt-5 w-100 d-flex justify-content-center">
                        <Row>
                            <Col sm={12} className="d-flex justify-content-center">
                                <Input.Password
                                    color="warning"
                                    clearable
                                    bordered
                                    labelPlaceholder="Código Secreto"
                                    size="xl"
                                    onChange={(e) => { console.log(e.target.value); setSecretCode(parseInt(e.target.value)) }}
                                />
                            </Col>
                            <Col sm={12}>
                                <div className="mt-3 w-100">
                                    <Button
                                        className="w-100"
                                        color="gradient"
                                        auto
                                        onClick={() => { validateSecretCode() }}>
                                        Abrir Puerta
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            }
            {render === 1 &&
                <div className="mt-5 mb-5">
                    <Row>
                        <Col sm={12} className="text-center">
                            <h3>
                                Las puertas se abren solo con llaves. <br />
                                Y a ti te falta solo una. <br />
                            </h3>
                            <h3 className="mt-3">
                                ¿Dónde estará?
                            </h3>
                            <h3 className="mt-5">
                                Me dijeron un día que Conejo de pascua es bueno escondiendo HUEVOS,
                                dónde dejará sus HUEVOS el conejo de pascua?
                            </h3>
                            <h3 className="mt-3">
                                Sólo él sabe, y pronto Tú sabrás
                            </h3>
                        </Col>
                        <Col sm={12} className="mt-5">
                            <Input.Password
                                color="warning"
                                clearable
                                bordered
                                labelPlaceholder="Clave"
                                size="xl"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </Col>
                        <Col sm={12}>
                            <div className="mt-3 w-100">
                                <Button
                                    className="w-100"
                                    color="gradient"
                                    auto
                                    onClick={() => { validatePassword() }}>
                                    Validar Clave
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
            {render === 2 &&
                <div className="mt-5 w-100 d-flex justify-content-center mb-5">
                    <Row>
                        <Col sm={12}>
                            <Button
                                color="secondary"
                                auto
                                onClick={() => { setRender(1); setTraduction('') }}>
                                Atrás
                            </Button>
                        </Col>
                        <Col sm={12} className="mt-3">
                            <h2>Parece que aquí puedes traducir un idioma raro.</h2>
                        </Col>
                        <Col sm={12} className="mt-5 w-100 d-flex justify-content-center">
                            <Textarea
                                value={text}
                                status="error"
                                rows={5}
                                size="xl"
                                className="w-100 h-100"
                                bordered
                                color="warning"
                                placeholder="Introducir lenguaje ancestral"
                                onChange={(e) => { setText(e.target.value.toUpperCase()) }}
                            />
                        </Col>
                        <Col sm={12}>
                            <div className="mt-5 w-100">
                                <Button
                                    className="w-100"
                                    color="gradient"
                                    auto
                                    onClick={() => { traducir() }}>
                                    Traducir
                                </Button>
                            </div>
                        </Col>
                        <Col sm={12} className="mt-5 w-100 d-flex justify-content-center">
                            <Textarea
                                readOnly
                                label="Traducción"
                                value={traduction}
                                rows={5}
                                size="xl"
                            />
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}
