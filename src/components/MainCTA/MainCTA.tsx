import React from 'react';
import bigHands from 'assets/bigHandsV2.jpg'
import danHead from 'assets/danHead.jpg'
import sizing from 'assets/smallestToLargest.jpg'
import './MainCTA.scss'

const images = [bigHands, danHead, sizing]

function randomIntFromInterval(max: number) {
  return Math.floor(Math.random() * max)
}

export const MainCTA = () => {
  const randomIndex = randomIntFromInterval(images.length)
  return (
    <div className="MainCTA">
      <img className='MainCTA__bg-image' src={images[randomIndex]} alt="the band" />
      <div className="MainCTA__logo">
        <Logo />
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <svg className='Logo' viewBox="0 0 1782 484" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeMiterlimit="10"><path d="M433.066 50.07c7.389 5.097 13.03 11.434 16.916 19.02 3.89 7.582 5.826 15.573 5.826 23.99 0 7.64-1.443 14.624-4.383 20.933-2.93 6.306-6.878 11.714-11.762 16.251-4.897 4.516-10.487 8.049-16.717 10.592-6.258 2.553-12.625 3.82-19.107 3.82a52.135 52.135 0 0 1-15.01-2.186c-4.897-1.452-9.588-3.666-14.038-6.606l3.037-4.395c4.065 2.798 8.294 4.84 12.616 6.125a46.663 46.663 0 0 0 13.184 1.906c5.36 0 10.586-.917 15.682-2.765 5.075-1.857 9.76-4.458 13.956-7.837 4.2-3.363 7.73-7.428 10.586-12.137 2.891-4.722 4.815-10.006 5.85-15.867L397.505 65.75c-4.818-3.318-8.553-7.552-11.185-12.718-2.592-5.166-3.908-10.623-3.908-16.34 0-5.098.977-9.762 2.961-13.96 1.985-4.199 4.604-7.834 7.855-10.892 3.24-3.067 6.975-5.444 11.173-7.16 4.198-1.72 8.475-2.6 12.797-2.6 3.327 0 6.675.493 10.045 1.44 3.372.967 6.518 2.467 9.479 4.5l-3.088 4.392c-2.523-1.773-5.175-3.058-7.934-3.811a31.006 31.006 0 0 0-8.502-1.165c-5.1 0-9.933 1.258-14.518 3.739-4.588 2.483-8.29 6.091-11.106 10.803l41.491 28.093ZM542.483 65.354c-5.02 13-7.546 26.698-7.546 41.101h-5.145c0-14.403-2.526-28.1-7.577-41.1-5.017-12.991-11.916-24.533-20.73-34.602v111.825H472.05V-.001a163.77 163.77 0 0 1 20.652 14.996 124.509 124.509 0 0 1 17.597 18.456c5.223 6.742 9.702 14.104 13.468 22.068 3.75 7.966 6.585 16.538 8.493 25.7 2.039-9.298 4.97-17.936 8.81-25.885 3.812-7.955 8.291-15.307 13.466-21.998a123.476 123.476 0 0 1 17.413-18.34 151.02 151.02 0 0 1 20.72-14.997v142.579h-29.455V30.753c-8.784 10.07-15.683 21.61-20.73 34.601M630.51 95.932h44.537l-23.138-53.88-21.399 53.88Zm18.544-60.954L634.902 2.08h32.481l59.832 140.497h-32.493l-17.576-41.285h-48.735l-16.26 41.285h-5.716l42.62-107.599ZM835.223 137.228v5.35h-94.24V2.082h29.435v135.147h64.805ZM943.2 137.228v5.35h-94.23V2.082h29.447v135.147H943.2ZM1078.145 142.579h-29.254V7.437h-41.285V2.081h111.815v5.356h-41.276V142.58Z" fillRule="nonzero" /><path d="M1162.624 1.906h-29.435V142.58h29.435z" /><path d="M1246.813 65.354c-5.03 13-7.546 26.698-7.546 41.101h-5.163c0-14.403-2.51-28.1-7.537-41.1-5.051-12.991-11.95-24.533-20.752-34.602v111.825h-29.426V-.001a164.587 164.587 0 0 1 20.646 14.996 124.563 124.563 0 0 1 17.582 18.456c5.226 6.742 9.715 14.104 13.48 22.068 3.742 7.966 6.585 16.538 8.502 25.7 2.03-9.298 4.949-17.936 8.784-25.885 3.81-7.955 8.317-15.307 13.474-21.998a126.788 126.788 0 0 1 17.383-18.34A150.856 150.856 0 0 1 1297-.002v142.579h-29.429V30.753c-8.801 10.07-15.719 21.61-20.758 34.601M1340.191 24.444h79.516v5.369h-79.516v107.415h62.113v5.35h-91.551V2.081h91.55v5.356h-62.112v17.007Z" fillRule="nonzero" /><path d="M0 0h444.011" fill="none" stroke="#000" stroke-width="2.76" transform="matrix(3.00545 0 0 3.02458 223.619 191.12)" /><path d="M699.232 451.768c10.196 7.217 21.338 12.797 33.46 16.723 12.102 3.929 24.938 5.892 38.54 5.892 16.127 0 31.322-2.822 45.553-8.454 14.228-5.613 26.65-13.323 37.272-23.08 10.61-9.764 19.058-21.236 25.328-34.42 6.255-13.157 9.4-27.282 9.4-42.353 0-14.86-3.145-28.897-9.4-42.06-6.27-13.166-14.718-24.638-25.328-34.386-10.622-9.785-23.044-17.482-37.272-23.102-14.23-5.629-29.426-8.466-45.553-8.466-13.602 0-26.438 1.981-38.54 5.913-12.122 3.929-23.264 9.5-33.46 16.714v171.08Zm72-202.613c17.403 0 33.82 3.076 49.219 9.246 15.401 6.16 28.827 14.551 40.281 25.173 11.481 10.608 20.507 22.981 27.076 37.097 6.597 14.13 9.884 29.263 9.884 45.405 0 16.36-3.287 31.643-9.884 45.864-6.57 14.25-15.595 26.605-27.076 37.109-11.454 10.513-24.88 18.85-40.281 25.004-15.398 6.17-31.816 9.25-49.22 9.25-17.412 0-33.826-3.08-49.218-9.25-15.392-6.155-28.827-14.49-40.3-25.004-11.454-10.504-20.497-22.86-27.076-37.109-6.587-14.221-9.875-29.504-9.875-45.864 0-16.142 3.288-31.274 9.875-45.405 6.579-14.116 15.622-26.49 27.076-37.097 11.473-10.622 24.908-19.012 40.3-25.173 15.392-6.17 31.806-9.246 49.219-9.246M1077.679 474.382v8.92H920.622V249.152h49.061v225.229h107.996ZM1149.67 286.419h132.537v8.938H1149.67v179.027h103.543v8.92h-152.599V249.156h152.6v8.908H1149.67v28.355ZM1359.606 451.768c10.196 7.217 21.338 12.797 33.46 16.723 12.093 3.929 24.95 5.892 38.53 5.892 16.134 0 31.323-2.822 45.563-8.454 14.219-5.613 26.662-13.323 37.263-23.08 10.622-9.764 19.076-21.236 25.343-34.42 6.249-13.157 9.385-27.282 9.385-42.353 0-14.86-3.136-28.897-9.385-42.06-6.267-13.166-14.72-24.638-25.343-34.386-10.601-9.785-23.044-17.482-37.263-23.102-14.24-5.629-29.429-8.466-45.562-8.466-13.58 0-26.438 1.981-38.53 5.913-12.123 3.929-23.265 9.5-33.461 16.714v171.08Zm71.99-202.613c17.413 0 33.837 3.076 49.241 9.246 15.377 6.16 28.812 14.551 40.27 25.173 11.48 10.608 20.497 22.981 27.078 37.097 6.594 14.13 9.894 29.263 9.894 45.405 0 16.36-3.3 31.643-9.894 45.864-6.581 14.25-15.597 26.605-27.079 37.109-11.457 10.513-24.892 18.85-40.269 25.004-15.404 6.17-31.828 9.25-49.24 9.25-17.413 0-33.809-3.08-49.21-9.25-15.401-6.155-28.836-14.49-40.3-25.004-11.472-10.504-20.506-22.86-27.075-37.109-6.597-14.221-9.888-29.504-9.888-45.864 0-16.142 3.291-31.274 9.888-45.405 6.569-14.116 15.603-26.49 27.076-37.097 11.463-10.622 24.898-19.012 40.3-25.173 15.4-6.17 31.796-9.246 49.209-9.246M1773.09 249.153h8.599v234.148h-21.97L1589.93 317.962v165.339h-8.92V249.153h16.541l175.538 167.882V249.153ZM192.08 249.153h8.607v234.148H178.72L8.91 317.962v165.339H.001V249.153h16.56l175.518 167.882V249.153ZM263.779 405.584h74.214l-38.549-89.836-35.665 89.836Zm30.896-101.632-23.586-54.799h54.155l99.714 234.148h-54.16l-29.303-68.81h-81.219l-27.094 68.81h-9.558l71.05-179.349ZM496.96 404.296c5.505 3.197 11.512 5.69 17.99 7.489 6.476 1.808 13.109 2.707 19.911 2.707 10.846 0 20.96-2.066 30.443-6.21 9.421-4.14 17.711-9.778 24.831-16.889 7.102-7.11 12.73-15.398 16.862-24.84 4.15-9.444 6.219-19.591 6.219-30.425s-2.069-20.982-6.219-30.421c-4.131-9.44-9.76-17.676-16.862-24.693-7.12-7.01-15.41-12.573-24.831-16.732-9.483-4.128-19.597-6.221-30.443-6.221-13.804 0-26.447 3.308-37.9 9.88v136.355Zm124.855-68.168c0 11.899-2.272 23.138-6.848 33.76-4.567 10.623-10.776 19.86-18.631 27.717-7.846 7.864-17.074 14.065-27.715 18.641-10.61 4.582-21.861 6.848-33.76 6.848-6.802 0-13.39-.744-19.753-2.22-6.385-1.507-12.41-3.624-18.148-6.382V483.3h-49.065V249.153l8.611-1.258 9.858 35.028c8.084-10.623 18.156-18.904 30.257-24.862 12.102-5.929 24.85-8.908 38.24-8.908 11.899 0 23.15 2.284 33.76 6.869 10.641 4.555 19.869 10.777 27.715 18.634 7.855 7.852 14.064 17.09 18.631 27.7 4.576 10.616 6.848 21.87 6.848 33.772" fillRule="nonzero" /></svg>
  )
}