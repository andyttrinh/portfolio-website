import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import  { TimeLineData } from '../../mock/data';;
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    const { timeline } = useContext(PortfolioContext);

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <section id='timeline'>
            <Container>
                <Title title='Timeline'/>
                <VerticalTimeline lineColor={'#333333'}>
                  {TimeLineData.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    return (
                      <VerticalTimelineElement
                      key={element.key}
                      date={element.date}
                      dateClassName="timeline-date"
                      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                      icon = {isWorkIcon ? <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z"/><path d="m134.582 156.792h142.836v30h-142.836z" transform="matrix(.707 -.707 .707 .707 -61.139 195.981)"/><path d="m234.582 156.792h142.836v30h-142.836z" transform="matrix(.707 -.707 .707 .707 -31.85 266.691)"/></g></svg> : <svg id="Layer_1" enable-background="new 0 0 512.001 512.001" height="512" viewBox="0 0 512.001 512.001" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m478.091 132.55-222.091-94.415-221.216 94.018-.874.396c-20.988 10.135-33.981 30.909-33.91 54.216s13.193 44.001 34.244 54.006l48.034 20.096h-1.278v137.793c-12.505 6.763-21 19.992-21 35.206 0 22.091 17.909 40 40 40s40-17.909 40-40c0-14.388-7.6-26.996-19-34.044v-122.756l135 56.479 129.551-54.185c11.972 21.713 22.549 50.553 29.223 79.727-59.217 16.151-112.495 38.673-158.774 67.117-26.608-16.354-55.543-30.739-86.579-43.093-4.305-1.657-8.072-3.043-11.368-4.202 12.99 13.714 21.181 32.001 21.876 52.171 23.22 10.574 44.993 22.426 65.162 35.55l10.909 7.098 10.908-7.098c49.641-32.302 108.838-57.03 175.948-73.499l18.085-4.438-3.138-18.355c-6.488-37.953-19.432-76.702-35.178-106.483l54.263-22.695.868-.388c21.051-10.005 34.172-30.699 34.244-54.006s-12.921-44.082-33.909-54.216zm-17.147 71.919-204.944 85.719-93.771-39.22 133.794-56.787-51.156-21.741-134.203 56.96-59.609-24.932c-6.907-3.439-11.031-10.074-11.055-17.827s4.059-14.412 10.942-17.894l205.058-87.149 205.059 87.15c6.883 3.482 10.966 10.142 10.942 17.894-.024 7.753-4.149 14.388-11.057 17.827z"/></svg>}
                      >
                        <h3 className="timeline-title">{element.title}</h3>
                        <h4 className="timeline-subtitle">{element.company}</h4>
                        <h5 className="timeline-location">{element.location}</h5>
                        <p id='description' className='timeline-p'>{element.description}</p>

                      </VerticalTimelineElement>
                    )
                  })}
                </VerticalTimeline>
            </Container>
        </section>
    )
}

export default Timeline