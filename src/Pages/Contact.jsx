

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
        <label>Name:</label>
        <input type="text" required />
        
        <label>Email:</label>
        <input type="email" required />
        
        <label>Message:</label>
        <textarea required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;