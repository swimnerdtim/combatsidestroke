import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';
import { cssFasterContent, navySealSwimTrainingContent, pstContent, openWaterContent, buddyTowContent, css_technique_combat_side_stroke_css_is_a_unique_bContent, this_is_a_great_example_of_someone_that_doesnt_rotContent, single_arm_css_combatsidestroke_navysealtrainingContent, i_use_these_underwater_pace_clocks_when_we_do_longContent, if_you_dont_rotate_in_css_you_will_be_slow_swimminContent, send_me_ur_css_vids_this_guy_has_clearly_been_watcContent, you_must_flutter_kick_in_combat_side_stroke_or_youContent, can_you_break_an_hourContent, tiktok_3_most_common_css_mistakes_combatsidestroke_navyseContent, every_swim_coachContent, breaststroke_side_stroke_is_fine_ive_kinda_seen_itContent, this_guy_has_an_excellent_scissors_kick_he_just_neContent, a_really_good_scissor_kick_is_arguably_the_most_imContent, rotating_into_the_scissor_kick_should_also_solve_tContent, if_you_dont_rotate_in_css_your_top_arm_aka_your_moContent, having_your_arms_at_your_side_is_super_slow_the_boContent, tiktok_1_kick_inside_of_a_box_2_rotate_your_top_arm_out_aContent, you_dont_need_to_switch_sides_every_lap_its_okay_tContent, shorten_your_bottom_arm_rotate_into_your_scissor_kContent, big_dawg_set_and_yes_you_can_do_that_first_set_witContent, tiktok_5x100_css_best_average_on_3_mins___good_to_do_at_lContent, did_i_forget_to_say_stop_gliding_and_stop_doing_puContent, lower_your_pst_time_with_this_test_set_do_this_at_Content, combat_side_stroke_with_fins_technique_swimming_coContent, you_must_rotate_combatsidestroke_navysealtrainingContent, two_big_dawg_arms_combatsidestrokeContent, plenty_of_things_we_can_work_on_keep_your_head_in_Content, dont_do_breaststroke_kick_while_buddy_towing_combaContent, tiktok_8x200s_on_430_at_800_pace_combatsidestrokeContent, duet_with_marie_risvik_hipmobility_combatsidestrokContent, tiktok_3x450s_on_1500_pbs_all_day_combatsidestroke_navyseContent, btd_buddy_tow_drill_when_you_do_this_drill_make_suContent, css_workout_of_the_day_buddy_tows_combatsidestrokeContent, replying_to_scoosie_the_bottom_arm_is_a_short_scooContent, if_you_dont_rotate_your_paddle_is_probably_out_of_Content, replying_to_sir_coughs_a_lotContent, this_is_an_aerobic_css_set_that_i_like_to_do_oftenContent, you_dont_need_a_lot_of_flutter_kicks_in_your_css_bContent, big_scissor_kicks_a_lot_of_drag_sometimes_this_is_Content, snap_those_hips_as_you_scissor_kick_use_a_flutter_Content, send_me_ur_css_videos_combatsidestrokegmailcom_comContent, this_guy_didnt_do_any_training___just_simple_technContent, css_review_this_guy_is_a_breaststroke_kicker_his_bContent, you_must_rotate_combatsidestrokeContent, this_guy_has_a_tiny_big_dawg_arm_youll_want_to_rotContent, my_neck_hurts_drop_the_chin___keep_your_head_in_a_Content, dont_stop_on_the_wall___bring_your_speed_off_of_itContent, breaststroke_kicking_in_your_combat_sidestroke_is_Content, sometimes_we_see_guys_kicking_air_like_this_dude_sContent, i_cringe_every_time_i_see_a_dude_with_straight_armContent, this_is_a_perfect_example_why_gliding_during_css_iContent, bottom_arm_is_sometimes_called_the_get_the_hell_ouContent, the_bottom_arm_should_be_a_small_scoop_palm_up_getContent, stop_gliding_for_3_mississippi___its_slow_dont_do_Content } from '../data/blog-content';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Post Not Found</h1>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }
  
  let content;
  switch(slug) {
    case 'css-faster':
      content = cssFasterContent;
      break;
    case 'navy-seal-swim-training':
      content = navySealSwimTrainingContent;
      break;
    case 'navy-seal-pst-swim':
      content = pstContent;
      break;
    case 'open-water-training':
      content = openWaterContent;
      break;
    case 'buddy-towing':
      content = buddyTowContent;
      break;
    default:
      content = null;
    case 'css-technique-combat-side-stroke-css-is-a-unique-b':
      content = css_technique_combat_side_stroke_css_is_a_unique_bContent;
      break;
    case 'this-is-a-great-example-of-someone-that-doesnt-rot':
      content = this_is_a_great_example_of_someone_that_doesnt_rotContent;
      break;
    case 'single-arm-css-combatsidestroke-navysealtraining':
      content = single_arm_css_combatsidestroke_navysealtrainingContent;
      break;
    case 'i-use-these-underwater-pace-clocks-when-we-do-long':
      content = i_use_these_underwater_pace_clocks_when_we_do_longContent;
      break;
    case 'if-you-dont-rotate-in-css-you-will-be-slow-swimmin':
      content = if_you_dont_rotate_in_css_you_will_be_slow_swimminContent;
      break;
    case 'send-me-ur-css-vids-this-guy-has-clearly-been-watc':
      content = send_me_ur_css_vids_this_guy_has_clearly_been_watcContent;
      break;
    case 'you-must-flutter-kick-in-combat-side-stroke-or-you':
      content = you_must_flutter_kick_in_combat_side_stroke_or_youContent;
      break;
    case 'can-you-break-an-hour':
      content = can_you_break_an_hourContent;
      break;
    case '3-most-common-css-mistakes-combatsidestroke-navyse':
      content = tiktok_3_most_common_css_mistakes_combatsidestroke_navyseContent;
      break;
    case 'every-swim-coach':
      content = every_swim_coachContent;
      break;
    case 'breaststroke-side-stroke-is-fine-ive-kinda-seen-it':
      content = breaststroke_side_stroke_is_fine_ive_kinda_seen_itContent;
      break;
    case 'this-guy-has-an-excellent-scissors-kick-he-just-ne':
      content = this_guy_has_an_excellent_scissors_kick_he_just_neContent;
      break;
    case 'a-really-good-scissor-kick-is-arguably-the-most-im':
      content = a_really_good_scissor_kick_is_arguably_the_most_imContent;
      break;
    case 'rotating-into-the-scissor-kick-should-also-solve-t':
      content = rotating_into_the_scissor_kick_should_also_solve_tContent;
      break;
    case 'if-you-dont-rotate-in-css-your-top-arm-aka-your-mo':
      content = if_you_dont_rotate_in_css_your_top_arm_aka_your_moContent;
      break;
    case 'having-your-arms-at-your-side-is-super-slow-the-bo':
      content = having_your_arms_at_your_side_is_super_slow_the_boContent;
      break;
    case '1-kick-inside-of-a-box-2-rotate-your-top-arm-out-a':
      content = tiktok_1_kick_inside_of_a_box_2_rotate_your_top_arm_out_aContent;
      break;
    case 'you-dont-need-to-switch-sides-every-lap-its-okay-t':
      content = you_dont_need_to_switch_sides_every_lap_its_okay_tContent;
      break;
    case 'shorten-your-bottom-arm-rotate-into-your-scissor-k':
      content = shorten_your_bottom_arm_rotate_into_your_scissor_kContent;
      break;
    case 'big-dawg-set-and-yes-you-can-do-that-first-set-wit':
      content = big_dawg_set_and_yes_you_can_do_that_first_set_witContent;
      break;
    case '5x100-css-best-average-on-3-mins---good-to-do-at-l':
      content = tiktok_5x100_css_best_average_on_3_mins___good_to_do_at_lContent;
      break;
    case 'did-i-forget-to-say-stop-gliding-and-stop-doing-pu':
      content = did_i_forget_to_say_stop_gliding_and_stop_doing_puContent;
      break;
    case 'lower-your-pst-time-with-this-test-set-do-this-at-':
      content = lower_your_pst_time_with_this_test_set_do_this_at_Content;
      break;
    case 'combat-side-stroke-with-fins-technique-swimming-co':
      content = combat_side_stroke_with_fins_technique_swimming_coContent;
      break;
    case 'you-must-rotate-combatsidestroke-navysealtraining':
      content = you_must_rotate_combatsidestroke_navysealtrainingContent;
      break;
    case 'two-big-dawg-arms-combatsidestroke':
      content = two_big_dawg_arms_combatsidestrokeContent;
      break;
    case 'plenty-of-things-we-can-work-on-keep-your-head-in-':
      content = plenty_of_things_we_can_work_on_keep_your_head_in_Content;
      break;
    case 'dont-do-breaststroke-kick-while-buddy-towing-comba':
      content = dont_do_breaststroke_kick_while_buddy_towing_combaContent;
      break;
    case '8x200s-on-430-at-800-pace-combatsidestroke':
      content = tiktok_8x200s_on_430_at_800_pace_combatsidestrokeContent;
      break;
    case 'duet-with-marie-risvik-hipmobility-combatsidestrok':
      content = duet_with_marie_risvik_hipmobility_combatsidestrokContent;
      break;
    case '3x450s-on-1500-pbs-all-day-combatsidestroke-navyse':
      content = tiktok_3x450s_on_1500_pbs_all_day_combatsidestroke_navyseContent;
      break;
    case 'btd-buddy-tow-drill-when-you-do-this-drill-make-su':
      content = btd_buddy_tow_drill_when_you_do_this_drill_make_suContent;
      break;
    case 'css-workout-of-the-day-buddy-tows-combatsidestroke':
      content = css_workout_of_the_day_buddy_tows_combatsidestrokeContent;
      break;
    case 'replying-to-scoosie-the-bottom-arm-is-a-short-scoo':
      content = replying_to_scoosie_the_bottom_arm_is_a_short_scooContent;
      break;
    case 'if-you-dont-rotate-your-paddle-is-probably-out-of-':
      content = if_you_dont_rotate_your_paddle_is_probably_out_of_Content;
      break;
    case 'replying-to-sir-coughs-a-lot':
      content = replying_to_sir_coughs_a_lotContent;
      break;
    case 'this-is-an-aerobic-css-set-that-i-like-to-do-often':
      content = this_is_an_aerobic_css_set_that_i_like_to_do_oftenContent;
      break;
    case 'you-dont-need-a-lot-of-flutter-kicks-in-your-css-b':
      content = you_dont_need_a_lot_of_flutter_kicks_in_your_css_bContent;
      break;
    case 'big-scissor-kicks-a-lot-of-drag-sometimes-this-is-':
      content = big_scissor_kicks_a_lot_of_drag_sometimes_this_is_Content;
      break;
    case 'snap-those-hips-as-you-scissor-kick-use-a-flutter-':
      content = snap_those_hips_as_you_scissor_kick_use_a_flutter_Content;
      break;
    case 'send-me-ur-css-videos-combatsidestrokegmailcom-com':
      content = send_me_ur_css_videos_combatsidestrokegmailcom_comContent;
      break;
    case 'this-guy-didnt-do-any-training---just-simple-techn':
      content = this_guy_didnt_do_any_training___just_simple_technContent;
      break;
    case 'css-review-this-guy-is-a-breaststroke-kicker-his-b':
      content = css_review_this_guy_is_a_breaststroke_kicker_his_bContent;
      break;
    case 'you-must-rotate-combatsidestroke':
      content = you_must_rotate_combatsidestrokeContent;
      break;
    case 'this-guy-has-a-tiny-big-dawg-arm-youll-want-to-rot':
      content = this_guy_has_a_tiny_big_dawg_arm_youll_want_to_rotContent;
      break;
    case 'my-neck-hurts-drop-the-chin---keep-your-head-in-a-':
      content = my_neck_hurts_drop_the_chin___keep_your_head_in_a_Content;
      break;
    case 'dont-stop-on-the-wall---bring-your-speed-off-of-it':
      content = dont_stop_on_the_wall___bring_your_speed_off_of_itContent;
      break;
    case 'breaststroke-kicking-in-your-combat-sidestroke-is-':
      content = breaststroke_kicking_in_your_combat_sidestroke_is_Content;
      break;
    case 'sometimes-we-see-guys-kicking-air-like-this-dude-s':
      content = sometimes_we_see_guys_kicking_air_like_this_dude_sContent;
      break;
    case 'i-cringe-every-time-i-see-a-dude-with-straight-arm':
      content = i_cringe_every_time_i_see_a_dude_with_straight_armContent;
      break;
    case 'this-is-a-perfect-example-why-gliding-during-css-i':
      content = this_is_a_perfect_example_why_gliding_during_css_iContent;
      break;
    case 'bottom-arm-is-sometimes-called-the-get-the-hell-ou':
      content = bottom_arm_is_sometimes_called_the_get_the_hell_ouContent;
      break;
    case 'the-bottom-arm-should-be-a-small-scoop-palm-up-get':
      content = the_bottom_arm_should_be_a_small_scoop_palm_up_getContent;
      break;
    case 'stop-gliding-for-3-mississippi---its-slow-dont-do-':
      content = stop_gliding_for_3_mississippi___its_slow_dont_do_Content;
      break;
  }
  
  return (
    <div className="blog-post-page">
      <section className="post-header">
        <div className="container">
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Blog
          </Link>
          <div className="post-category">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="post-content">
            {content}
          </div>
          

        </div>
      </section>
    </div>
  );
}

export default BlogPost;
