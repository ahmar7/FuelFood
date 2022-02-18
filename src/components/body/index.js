import React from 'react';
import { Button } from '@mui/material';
import Food from '../../assets/images/food.png'
import Blob from '../../assets/images/blob(2).png'
import Path1 from '../../assets/images/path1.png'
import Path2 from '../../assets/images/path2.png'
import Path3 from '../../assets/images/path3.png'
import Group from '../../assets/images/Group 10.png'
import Group2 from '../../assets/images/Group 15.png'
import Client1 from '../../assets/images/Ellipse 4.png'
import Client2 from '../../assets/images/Ellipse 5.png'
import Client3 from '../../assets/images/Ellipse 6.png'
import Client4 from '../../assets/images/Ellipse 7.png'

import './style.css'
const Body = () => {
    return (
        <>
            <div className='main-home'>
                <div className='left-column'>
                    <h1>Stay <span style={{ color: '#03A37C' }}>Healthy</span>  & In Shape
                        With <span style={{ color: '#008CDE' }}>Tasty</span>  And Easy Meals</h1>
                    <p>Because What You Put On Your Plate Matters! <br />
                        With Fuel Food’s Meal Planning App, You Can Save Time & Hassle<br /> While Fueling Your Body Only With Highly-Nutritious Food</p>
                    <Button className='btn' variant="contained">Subscribe Now</Button>

                </div>
                <div className='right-column'>
                    <img src={Food} />
                </div>
            </div>
            <div className='second-sec top-sec'>
                <div className='vector-area'>
                    <img src={Path1} alt="Vector-image" />
                </div>
                <div className='content-area'>
                    <h3>Too Many Steps, Too Little Time</h3>
                    <p>Up Until Now, If You Wanted To Keep Up With A Nutrition Plan Along With Your Training Routine And A Demanding Work Schedule, You Had To Search For Recipes, Write Down Their Ingredients, And Then Go Shopping. But With The Early Mornings Turning Into Extra-Long Days, Following All These Steps Is Impossible.</p>
                </div>

            </div>
            <div className='second-sec bg-add'>
                <div className='vector-area up'>
                    <img src={Path2} alt="Vector-image" />
                </div>
                <div className='content-area'>
                    <img className='bob2' src={Blob} alt="blob" />
                    <h3>Eating Healthy Is No Longer A Struggle</h3>
                    <p>Discover The Smartest, Easiest, And Most Effective Way To Plan Your Nutrition Amongst Your Daily Craziness! With Fuel Food’s App, You Can Fill Your Fridge With All The Right Ingredients And Cook Delicious Meals In No Time.</p>
                </div>
                <div className='vector-area below'>
                    <img src={Path2} alt="Vector-image" />
                </div>


            </div>
            <div className='second-sec'>
                <div className='vector-area'>
                    <img style={{ marginTop: '50px' }} src={Path3} alt="Vector-image" />
                </div>
                <div className='content-area'>
                    {/* <img className='bob3' src={Blob} alt="blob" /> */}
                    <h3>Eat Better - Liver Better - Perform Better</h3>
                    <p>Whether You Are A Busy Workaholic Who Needs To Optimize Your Diet Or A Professional Athlete That Wants To Increase Their Performance Rate, Nutrition Plays A Key Role In Your Daily Life. Using Fuel Food Will Help You Get Better Organized And Improve Your Diet, So You Can Reap More Personal And Athletic Benefits.</p>
                </div>

            </div>
            <div className='section-three'>
                <div className="inner-sec">
                    <div className='inner-ul'>
                        <h1>Why Choose Us?</h1>
                        <ul className='features'>
                            <li>Maximize your Healthy Food Intake</li>
                            <li>Skip The Calories & Macro-Counting Hassle</li>
                            <li>Access Quick, Easy & Mouth-Watering Recipes</li>
                            <li>Pair Your Meal Plan With Your Training</li>
                            <li>Enjoy Healthy Food With Minimum Effort</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='section-four'>
                <div className='image-container'>
                    <img src={Group} alt="image" />
                </div>
                <div>
                    <h1>LIMITED TIME OFFER</h1>
                    <p>Subscribe to the app now and enjoy our 50% off special offer!</p>
                </div>
                <div className='bottom-btn'>
                    <Button className='btn subscribe' variant="contained">Subscribe Now</Button>
                </div>
            </div>
            <div className='section-five'>
                <div className='block-1'>
                    <h3>There’s No One-Size <br />
                        Fits-All Approach</h3>
                    <p>The Meals In The App Are Generated According To Your Personal Preferences And Daily Schedule – Be It Your Workout Routine, A Heavy Program, Repetitive Meals, Or Anything Else.</p>
                </div>
                <div className='block-2'>
                    <div className='inner-block'>
                        <h3>Effortless Shopping <br />
                            List Organization</h3>
                        <p>All The Items And Ingredients You Will Need Are Organized By Section So You Can Complete Your Shopping List In No Time.</p>
                    </div>
                </div>
                <div className='block-1'>
                    <h3>Planning & Shopping <br />
                        At Its Best</h3>
                    <p>With The Calendar Function, The Shopping List Feature, And The Online Grocery Service, You Will Need Only 15 Minutes To Plan The Grocery Shopping For An Entire Week!</p>
                </div>
            </div>
            <div className='section-six'>
                <div className='customer-head'>
                    <div className='inner-h'>
                        <h1>Customers</h1>
                        <h4>Reviews</h4>
                    </div>

                </div>
                <div className='reviews'>
                    <div className='side'>
                        <div className='client-1'>
                            <img src={Client1} alt="" />
                        </div>
                        <div className='client-2'>
                            <img src={Client2} alt="" />
                        </div>
                    </div>
                    <div className='middle'>
                        <img src={Group2} alt="" />
                        <h3>Beverly Miller</h3>
                        <p>With the calendar function, the shopping list feature, and the online grocery service, you will need only 15 minutes to plan the grocery shopping for an entire week!</p>
                    </div>
                    <div className='side'>
                        <div className='client-1'>
                            <img src={Client3} alt="" />
                        </div>
                        <div className='client-2'>
                            <img src={Client4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-seven'>
                <h1>Fuel Your Every Single Day With Fuel Food!</h1>
                <p>One app is enough to help you put a proper nutrition plan into practice. <br />
                    What are you still waiting for?</p>
                <div className='bottom-btn'>
                    <Button className='btn subscribe' variant="contained">Subscribe Now</Button>
                </div>
            </div>
        </>

    );
}

export default Body;
