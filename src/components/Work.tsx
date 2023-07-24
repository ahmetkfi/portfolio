import React from 'react'
import Image from 'next/image'
type ProjectProps={
    projectName:string,
    projectDescription:string,
    projectImgUrl:string
    projectUrl:string
}
const Work = ({projectName,projectDescription,projectImgUrl,projectUrl}:ProjectProps) => {
  return (
    <div className="p-4 w-full lg:w-1/2">
          <div
            className="h-full  shadow-sm hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
          >
            <div className="relative h-[14rem] md:h-36 lg:h-64">
              <a aria-label={`Link to ${projectName}`} href={projectUrl}
                ><img
                  alt={projectName}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover absolute object-center"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent'
                  }}
                  sizes="100vw"
                  
                  src={projectImgUrl}
              /></a>
            </div>
            <div className="p-6">
              <h2
                className="mb-3 text-xl sm:text-2xl font-bold leading-8 tracking-tight"
              >
                <a
                  aria-label={`Link to ${projectName}`}
                  className="flex items-center gap-2"
                  href={projectUrl}
                  >{projectName}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="up-right-from-square"
                    className="svg-inline--fa fa-up-right-from-square h-3 w-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                    ></path></svg
                ></a>
              </h2>
              <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                {projectDescription}
              </p>
            </div>
          </div>
        </div>
  )
}

export default Work