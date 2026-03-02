export default function LessTalkSection() {
  return (
    <section className="less-talk">
      <div className="container less-talk__container">

        <div className="less-talk__content">
          <h2 className="less-talk__title">Less talk <br /> and more walk</h2>

          <p className="less-talk__text">
            Sometimes our career, lifestyle, or routines can make it difficult
            to provide your pet with the recommended amount of exercise that they need. Which is why, it’s okay to use an extra hand in walking dogs so they are in perfect shape, mentally and physically.
          </p>

          <button className="less-talk__button">Explore More</button>
        </div>

        <div className="less-talk__image">
          <img src="/images/Group2.png" alt="Dog walking" className="img-dog" />
          <svg className="img-icon"><use href="/images/sprite.svg#foodicon" /></svg>
          <img src="/images/video.png" alt="" className="img-button" />
        </div>

      </div>
    </section>
  );
}