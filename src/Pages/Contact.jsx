import ContactForm from "../components/form/ContactForm";

export default function Contact() {
  return (
    <section className="contact">
      {/* SVG background */}
      <svg
        viewBox="0 0 1440 741"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="contact__bg"
      >
        <path
          d="M284.837 127.549C-132.656 42.22 -178.377 91.9952 -149.052 127.549C-284.517 377.758 -516.657 837.201 -361.497 673.299C-167.547 468.42 460.292 767.516 843.693 739.073C1150.41 716.319 1473.03 603.673 1596 550.194V0L1148.12 78.2182C1002.14 115.105 702.33 212.878 284.837 127.549Z"
          fill="url(#contactGradient)"
        />
        <defs>
          <linearGradient
            id="contactGradient"
            x1="591.5"
            y1="0"
            x2="591.691"
            y2="545.305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F1F3FF" />
            <stop offset="1" stopColor="#F1F3FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">

        {/* Left dog */}
        <img
          src="/images/expertDog1Small.png"
          alt="Dog"
          className="contact__dog contact__dog--left"
        />

        <ContactForm />

        {/* Right dog */}
        <img
          src="/images/expertDog2min1.png"
          alt="Dog"
          className="contact__dog contact__dog--right"
        />

      </div>
    </section>
  );
}