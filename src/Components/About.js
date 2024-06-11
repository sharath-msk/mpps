import React from 'react'
import "../App.css"

const About = () => {
  return (
    <div class="responsive-container-block big-container">
  <div class="responsive-container-block container">
    <div class="responsive-container-block">
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
        <img alt="golden-lines.png" class="image-block bg-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png" height={500}/>
      </div>
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
        <p class="text-blk section-head">
          About Us
        </p>
        <p class="text-blk section-text">
        Our Motor Parts Inventory Management System is a comprehensive solution designed to streamline the complexities of managing a diverse range of motor parts for various manufacturers and vehicle types. With a focus on efficiency and cost-effectiveness, our system incorporates the principles of just-in-time (JIT) inventory management to ensure optimal inventory levels while minimizing overhead costs. By organizing parts in wall-mounted and numbered racks, shop owners can easily track inventory levels and locate specific items when needed. The system's automated reordering feature calculates threshold values for each item based on average weekly sales, triggering orders as soon as inventory levels fall below the specified threshold. Integration with vendors enables seamless ordering and restocking processes, further enhancing efficiency. Daily revenue reports provide insights into sales performance, empowering shop owners to make informed decisions. At the end of each month, the system generates graphical sales analyses, allowing shop owners to identify trends and patterns to optimize inventory management and sales strategies. Experience the benefits of our Motor Parts Inventory Management System and take control of your inventory management process today.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default About
