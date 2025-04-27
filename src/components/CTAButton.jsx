function CTAButton({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-secondary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-500 transition"
      >
        {text}
      </button>
    )
  }
  
  export default CTAButton
  