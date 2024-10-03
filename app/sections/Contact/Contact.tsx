import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Button from '@/app/components/Button/Button';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!captchaToken) {
      setError('Please complete the CAPTCHA');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/[locale]/contact', {
        ...formData,
        captchaToken
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setCaptchaToken(null);
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>
          Fale conosco
        </h2>
        <form
          className={styles.inputs}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className={styles.contacts}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Escreva sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ReCAPTCHA
            sitekey={siteKey || ''}
            onChange={handleCaptchaChange}
          />
          <Button text={loading ? 'Enviando...' : 'Enviar'} link={'#'} />
        </form>
        {error && <p className={styles.error}>
          {error}
        </p>}
        {success && <p className={styles.success}>
          Mensagem enviada com sucesso!
        </p>}
      </div>
    </section >
  )
}

export default Contact