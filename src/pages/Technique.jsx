import './Technique.css';

function Technique() {
  return (
    <div className="technique-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">COMBAT SIDE STROKE TECHNIQUE</h1>
          <p className="page-subtitle">Master the stroke used by Navy SEALs and special operations forces</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="technique-content">
            
            <div className="technique-section">
              <h2>What is Combat Side Stroke?</h2>
              <p>
                Combat Side Stroke (CSS) is a unique blend of freestyle and breaststroke. It's quiet and powerful. 
                Having the proper technique and understanding how the stroke works is key to swimming fast. 
                The way I think about it is in a sequence - a cadence of: <strong>"Big arm, little arm, together, shoot."</strong>
              </p>
            </div>

            <div className="technique-section">
              <h2>Combat Side Stroke Arm Pull</h2>
              <p>
                You can swim CSS on either side (right or left) and I like to teach everyone to be able to do so. 
                It's nice to be able to switch sides during a long ocean swim. In Phase 3 of BUD/S, you have a 5.5 mile swim. 
                That's roughly 8,800 meters. In a pool, if you did 88x100's on 2 minutes, it would take you about 3 hours.
              </p>
              <p>
                If you swim on your left side, your left arm will be closer to the bottom of the pool. 
                This is called your <strong>bottom arm</strong> or <strong>little arm</strong>. 
                Your right arm is the <strong>top arm</strong>, also known as your <strong>big arm</strong>.
              </p>
              <div className="key-terms">
                <div className="term">
                  <strong>Bottom Arm</strong> = Little Arm
                </div>
                <div className="term">
                  <strong>Top Arm</strong> = Big Arm
                </div>
              </div>
            </div>

            <div className="technique-section">
              <h3>Bottom Arm / Little Arm</h3>
              <p>
                The bottom arm, I call the little arm, because for 99% of guys, they go faster with a shorter, smaller bottom arm. 
                This is the biggest misconception when it comes to teaching combat side stroke - the bottom arm does not have to go all the way down. 
                It can be just a little circular arm motion - a scull of sorts.
              </p>
              <p>
                When you pull your bottom arm all the way down to your side, you have both of your arms at your side, and your velocity plummets to nearly nothing. 
                Guys that swim like this are easy to spot because they are so herky-jerky. 
                If you hooked them up to a velocity meter, you would see a big spike up and a big spike down.
              </p>
              <div className="technique-tip">
                <strong>Pro Tip:</strong> Think of the bottom arm as a scoop. Make the circle bigger if you want to make your stroke longer. 
                Make it shorter to speed the stroke up.
              </div>
            </div>

            <div className="technique-section">
              <h3>Top Arm / Big Arm</h3>
              <p>
                The top arm, I call the big arm, because it's always a normal freestyle pull from top to bottom - it really can't or shouldn't be shortened.
              </p>
              <p>
                The biggest mistake I see is guys not fully rotating over onto their stomach and really reaching out with their arm to lengthen the stroke 
                and put the arm in a position to properly catch the water.
              </p>
              <div className="technique-tip">
                <strong>Critical:</strong> Get your fingers pointed towards the bottom of the pool, while keeping your elbow as high on the surface as possible, 
                when you begin your top arm pull. This is called your <strong>catch</strong> - this is you putting your paddle in the proper position before pulling.
              </div>
            </div>

            <div className="technique-section">
              <h2>Bringing the Arms Together</h2>
              <p className="cadence">"Big arm, little arm, together, shoot."</p>
              <p>
                Your big arm and little arm should meet each other at about your shoulders. Another common mistake I see is guys leaving their top arm 
                on their side after their big arm pull. Don't do that. It should always be moving.
              </p>
              <p>
                <strong>"Shoot"</strong> is shooting both arms into streamline while scissor kicking. You are essentially kicking yourself into streamline, 
                which is why Single Arm CSS is my favorite drill.
              </p>
            </div>

            <div className="technique-section">
              <h2>Kicking During Combat Side Stroke</h2>
              <p>
                Some people say you shouldn't flutter kick during CSS, and I highly disagree. But let's start with the scissors kick.
              </p>
              
              <h3>Scissor Kicking</h3>
              <p>
                Like the CSS arm pull, the CSS leg kick has a bottom leg and a top leg. 
                The bottom leg is your kicking a ball leg. It's your propulsion leg - perhaps the most important part of the entire stroke. 
                You bring your heel to your butt and whip it back down like kicking a ball.
              </p>
              <p>
                The top leg is your heel kick leg. Your knee will come up and you will heal kick back down. 
                Your legs do this at the same time, which makes you look like a scissor.
              </p>
              <div className="technique-tip">
                <strong>Mistake to Avoid:</strong> Having a huge massively wide kick. When you do this, you create a ton of drag which is suboptimal. 
                Try keeping your knees together. While nearly impossible, give it a shot.
              </div>
            </div>

            <div className="technique-section">
              <h3>Flutter Kicking</h3>
              <p>
                If you want to sprint combat side stroke, then an aggressive flutter kick after a scissors kick is a must. 
                But the flutter kick doesn't have to be that egregious during longer swims.
              </p>
              <p>
                Instead, we are looking to use the flutter kicks to rotate our hips so that we can lengthen out the stroke, 
                putting our arm in a better position to pull. If done properly, you should be doing a flutter kick at the same time 
                as your big arm is anchoring the catch.
              </p>
            </div>

            <div className="cta-box">
              <h3>What's Next?</h3>
              <p>Join the Combat Side Stroke Workout Group</p>
              <p>
                To enhance your combat side stroke and make the most of your preparation, 
                the Swimnerd app can be an invaluable tool. Receive custom workouts, upload your stroke technique videos for evaluation, 
                and learn everything there is to know about CSS from a professional swim coach.
              </p>
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Download Swimnerd App
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Technique;
