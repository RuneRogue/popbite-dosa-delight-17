import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    time: '',
    message: '',
    email: '',
    mobile: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit number';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.title) {
      newErrors.title = 'Please select a subject';
    }

    if (!formData.message || formData.message.length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const time = new Date().toLocaleString();
    emailjs
      .send(
        'service_a3s7254',
        'template_6erg57v',
        { ...formData, time },
        'sjr2Z1RHQPQnMSJpx'
      )
      .then(
        () => {
          alert('Message sent successfully');
          setFormData({
            title: '',
            name: '',
            time: '',
            message: '',
            email: '',
            mobile: ''
          });
          setErrors({});
        },
        () => {
          alert('Message failed to send');
        }
      ).finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <form className="space-y-6" onSubmit={handleSubmit} ref={formRef} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="text-orange-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <Input id="mobile" type="tel" placeholder="10-digit mobile number" value={formData.mobile} onChange={handleChange} maxLength={10} />
                    {errors.mobile && <p className="text-orange-600 text-sm mt-1">{errors.mobile}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="text-orange-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-popbite-black transition-all text-sm font-medium text-gray-700"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.title && <p className="text-orange-600 text-sm mt-1">{errors.title}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" rows={5} placeholder="Your message" value={formData.message} onChange={handleChange} />
                  {errors.message && <p className="text-orange-600 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                  className="bg-popbite-orange hover:bg-popbite-red hover:text-white text-white w-full flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading && <Loader2 className="animate-spin" size={20} />}
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="bg-white p-8 rounded-lg shadow space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 text-popbite-orange" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">contactpopbites@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 text-popbite-orange" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">+91 7359077882</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-popbite-orange" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">
                        Shed No.2, Opp. of Dinkar Bhavan,<br />
                        Beside Majigam Lake,<br />
                        N.H 48, Chikhli-396521,<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <table className="text-gray-600 text-sm w-full">
                      <tbody>
                        <tr><td>Monday - Sunday</td><td>10:00 AM - 6:00 PM</td></tr>
                        <tr><td>Tuesday</td><td>Closed</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.208193321672!2d73.06655707485454!3d20.737027680869376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f8f1183b7c8b%3A0x9a7bc8e73a1cf943!2sPOPBITE%20CONSUMER%20PVT.LTD!5e0!3m2!1sen!2sin!4v1713965480000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
