import React, { useState, useEffect }from 'react'
import { Junk } from './style'

const Svg = () => {
    const [dims, setDim] = useState({width: window.innerWidth, height: window.innerHeight})
    const [yTransform, setYTransform] = useState(0)
    console.log(dims.width, dims.height) 
    let transform = `translateY(${yTransform}rem)`

    useEffect(() => {
        const handleResize = () => setDim({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const wheelFunc = (e) => {
        console.log(e.deltaY, yTransform)
        setYTransform(yTransform + (e.deltaY/5))
    }

    return(
    <Junk key="svgJunk" transform={`translateY(${yTransform}px)`} onWheel={wheelFunc} > 
        <svg width="1000px" height={dims.height} viewBox={`200 0 ${dims.width*.95} ${dims.height}`} >
		<path fill="none" stroke="#F500FF" strokeWidth="36" strokeMiterlimit="10" d="M1211.997,1163.993
			c-66.666,0-66.666-160-133.332-160c-66.663,0-66.663,160-133.327,160c-66.666,0-66.666-160-133.332-160s-66.666,160-133.331,160
			c-66.666,0-66.666-160-133.333-160c-66.667,0-66.667,160-133.334,160c-66.667,0-66.667-160-133.333-160
			c-66.669,0-66.669,160-133.339,160s-66.67-160-133.339-160"/>
	
	
		<path fill="none" stroke="#EC00FF" strokeWidth="34.3333" strokeMiterlimit="10" d="M1211.14,1107.957
			c-59.999,0-59.999-152.477-119.999-152.477c-59.999,0-59.999,152.477-119.998,152.477c-59.997,0-59.997-152.477-119.994-152.477
			c-60,0-60,152.477-120,152.477c-59.999,0-59.999-152.477-119.998-152.477c-60,0-60,152.477-119.999,152.477
			c-60,0-60-152.477-120.001-152.477c-60,0-60,152.477-120,152.477c-60.003,0-60.003-152.477-120.005-152.477
			c-60.003,0-60.002,152.477-120.005,152.477"/>
	
	
		<path fill="none" stroke="#E300FF" strokeWidth="32.6667" strokeMiterlimit="10" d="M1210.282,1051.921
			c-54.544,0-54.544-144.953-109.089-144.953s-54.545,144.953-109.09,144.953s-54.545-144.953-109.09-144.953
			c-54.543,0-54.543,144.953-109.086,144.953c-54.545,0-54.545-144.953-109.091-144.953c-54.544,0-54.544,144.953-109.089,144.953
			s-54.545-144.953-109.09-144.953c-54.544,0-54.544,144.953-109.089,144.953c-54.546,0-54.546-144.953-109.092-144.953
			c-54.548,0-54.548,144.953-109.097,144.953c-54.548,0-54.549-144.953-109.097-144.953"/>
	
	
		<path fill="none" stroke="#DA00FF" strokeWidth="31" strokeMiterlimit="10" d="M1209.425,995.884
			c-49.999,0-49.999-137.428-99.999-137.428s-50,137.428-99.999,137.428s-49.999-137.428-99.997-137.428
			c-50,0-50,137.428-99.999,137.428c-49.997,0-49.997-137.428-99.995-137.428c-50,0-50,137.428-100,137.428
			c-50,0-50-137.428-99.999-137.428c-50,0-50,137.428-100,137.428c-49.999,0-49.999-137.428-99.998-137.428
			c-50.001,0-50.001,137.428-100.001,137.428c-50.003,0-50.003-137.428-100.006-137.428S59.428,995.884,9.425,995.884"/>
	
	
		<path fill="none" stroke="#D100FF" strokeWidth="29.3333" strokeMiterlimit="10" d="M1208.567,939.849
			c-46.153,0-46.153-129.904-92.307-129.904s-46.153,129.904-92.308,129.904c-46.15,0-46.15-129.904-92.301-129.904
			c-46.152,0-46.152,129.904-92.306,129.904s-46.153-129.904-92.307-129.904c-46.152,0-46.152,129.904-92.305,129.904
			c-46.154,0-46.154-129.904-92.309-129.904c-46.153,0-46.153,129.904-92.307,129.904c-46.154,0-46.154-129.904-92.309-129.904
			c-46.153,0-46.153,129.904-92.307,129.904c-46.155,0-46.155-129.904-92.31-129.904c-46.157,0-46.157,129.904-92.313,129.904
			S54.725,809.944,8.568,809.944"/>
	
	
		<path fill="none" stroke="#C800FF" strokeWidth="27.6667" strokeMiterlimit="10" d="M1207.711,883.812
			c-42.855,0-42.855-122.381-85.712-122.381s-42.856,122.381-85.714,122.381s-42.857-122.381-85.714-122.381
			c-42.854,0-42.854,122.381-85.709,122.381c-42.856,0-42.856-122.381-85.712-122.381c-42.857,0-42.857,122.381-85.714,122.381
			s-42.856-122.381-85.712-122.381c-42.857,0-42.857,122.381-85.715,122.381c-42.857,0-42.857-122.381-85.714-122.381
			c-42.857,0-42.857,122.381-85.715,122.381c-42.857,0-42.857-122.381-85.714-122.381c-42.858,0-42.858,122.381-85.716,122.381
			c-42.86,0-42.86-122.381-85.72-122.381c-42.86,0-42.86,122.381-85.72,122.381"/>
	
	
		<path fill="none" stroke="#BF00FF" strokeWidth="26" strokeMiterlimit="10" d="M1206.854,827.776
			c-39.999,0-39.999-114.857-79.998-114.857s-39.999,114.857-79.998,114.857c-40,0-40-114.857-80-114.857
			c-39.996,0-39.996,114.857-79.993,114.857s-39.997-114.857-79.995-114.857c-40,0-40,114.857-79.999,114.857
			c-40.001,0-40.001-114.857-80.001-114.857c-39.999,0-39.999,114.857-79.998,114.857c-40.001,0-40.001-114.857-80.001-114.857
			c-40,0-40,114.857-80,114.857c-40,0-40-114.857-80.001-114.857c-40,0-40,114.857-80,114.857
			c-40.001,0-40.001-114.857-80.002-114.857c-40.003,0-40.003,114.857-80.006,114.857S46.856,712.919,6.854,712.919"/>
	
	
		<path fill="none" stroke="#B600FF" strokeWidth="24.3333" strokeMiterlimit="10" d="M1205.996,771.74
			c-37.5,0-37.5-107.334-75-107.334c-37.499,0-37.499,107.334-74.998,107.334S1018.499,664.406,981,664.406
			c-37.496,0-37.496,107.334-74.993,107.334s-37.497-107.334-74.994-107.334c-37.498,0-37.498,107.334-74.996,107.334
			c-37.5,0-37.5-107.334-75-107.334c-37.501,0-37.501,107.334-75.001,107.334c-37.499,0-37.499-107.334-74.999-107.334
			c-37.501,0-37.501,107.334-75.002,107.334c-37.5,0-37.5-107.334-75.001-107.334c-37.499,0-37.499,107.334-74.998,107.334
			c-37.5,0-37.5-107.334-75.001-107.334c-37.502,0-37.502,107.334-75.004,107.334c-37.503,0-37.504-107.334-75.007-107.334
			C43.5,664.406,43.5,771.74,5.996,771.74"/>
	
	
		<path fill="none" stroke="#AD00FF" strokeWidth="22.6667" strokeMiterlimit="10" d="M1205.139,715.703
			c-35.293,0-35.293-99.809-70.586-99.809c-35.294,0-35.294,99.809-70.588,99.809c-35.293,0-35.293-99.809-70.587-99.809
			s-35.294,99.809-70.587,99.809c-35.291,0-35.291-99.809-70.581-99.809c-35.292,0-35.292,99.809-70.583,99.809
			c-35.293,0-35.293-99.809-70.585-99.809c-35.294,0-35.294,99.809-70.588,99.809c-35.295,0-35.295-99.809-70.589-99.809
			c-35.293,0-35.293,99.809-70.587,99.809c-35.295,0-35.295-99.809-70.59-99.809c-35.294,0-35.294,99.809-70.589,99.809
			c-35.293,0-35.293-99.809-70.586-99.809c-35.295,0-35.295,99.809-70.59,99.809c-35.296,0-35.296-99.809-70.592-99.809
			c-35.298,0-35.297,99.809-70.595,99.809c-35.297,0-35.298-99.809-70.595-99.809"/>
	
	
		<path fill="none" stroke="#A400FF" strokeWidth="21" strokeMiterlimit="10" d="M1204.281,659.668
			c-33.332,0-33.332-92.286-66.664-92.286s-33.332,92.286-66.665,92.286s-33.333-92.286-66.667-92.286
			c-33.332,0-33.332,92.286-66.665,92.286c-33.331,0-33.331-92.286-66.663-92.286c-33.33,0-33.33,92.286-66.661,92.286
			s-33.331-92.286-66.662-92.286s-33.331,92.286-66.663,92.286c-33.334,0-33.334-92.286-66.667-92.286
			c-33.334,0-33.334,92.286-66.668,92.286c-33.333,0-33.333-92.286-66.666-92.286c-33.334,0-33.334,92.286-66.669,92.286
			c-33.334,0-33.334-92.286-66.668-92.286c-33.333,0-33.333,92.286-66.665,92.286c-33.334,0-33.334-92.286-66.668-92.286
			c-33.335,0-33.335,92.286-66.67,92.286c-33.337,0-33.337-92.286-66.674-92.286s-33.336,92.286-66.673,92.286"/>
	
	
		<path fill="none" stroke="#9B00FF" strokeWidth="19.3333" strokeMiterlimit="10" d="M1203.424,603.632
			c-31.578,0-31.578-84.762-63.156-84.762s-31.578,84.762-63.156,84.762s-31.578-84.762-63.156-84.762s-31.578,84.762-63.157,84.762
			c-31.575,0-31.575-84.762-63.151-84.762c-31.578,0-31.578,84.762-63.155,84.762s-31.577-84.762-63.153-84.762
			s-31.576,84.762-63.153,84.762s-31.577-84.762-63.155-84.762c-31.58,0-31.58,84.762-63.159,84.762
			c-31.58,0-31.58-84.762-63.159-84.762c-31.579,0-31.579,84.762-63.158,84.762c-31.581,0-31.581-84.762-63.161-84.762
			c-31.58,0-31.58,84.762-63.159,84.762c-31.579,0-31.579-84.762-63.157-84.762c-31.58,0-31.58,84.762-63.16,84.762
			c-31.581,0-31.581-84.762-63.162-84.762c-31.583,0-31.582,84.762-63.165,84.762S35.007,518.87,3.424,518.87"/>
	
	
		<path fill="none" stroke="#9300FF" strokeWidth="17.6667" strokeMiterlimit="10" d="M1202.566,547.596
			c-28.57,0-28.57-77.238-57.141-77.238s-28.57,77.238-57.141,77.238s-28.57-77.238-57.142-77.238s-28.571,77.238-57.142,77.238
			s-28.57-77.238-57.141-77.238c-28.572,0-28.572,77.238-57.144,77.238c-28.569,0-28.569-77.238-57.138-77.238
			c-28.57,0-28.57,77.238-57.141,77.238c-28.568,0-28.568-77.238-57.138-77.238s-28.569,77.238-57.14,77.238
			s-28.57-77.238-57.141-77.238c-28.572,0-28.572,77.238-57.144,77.238c-28.572,0-28.572-77.238-57.145-77.238
			c-28.572,0-28.572,77.238-57.143,77.238c-28.572,0-28.572-77.238-57.145-77.238s-28.573,77.238-57.145,77.238
			c-28.571,0-28.571-77.238-57.142-77.238c-28.573,0-28.573,77.238-57.145,77.238c-28.573,0-28.573-77.238-57.147-77.238
			c-28.575,0-28.575,77.238-57.149,77.238s-28.575-77.238-57.149-77.238"/>
	
	
		<path fill="none" stroke="#8A00FF" strokeWidth="16" strokeMiterlimit="10" d="M1201.71,491.559
			c-27.272,0-27.272-69.714-54.545-69.714c-27.271,0-27.271,69.714-54.543,69.714c-27.272,0-27.272-69.714-54.544-69.714
			s-27.271,69.714-54.544,69.714s-27.272-69.714-54.544-69.714s-27.271,69.714-54.544,69.714s-27.272-69.714-54.546-69.714
			c-27.27,0-27.27,69.714-54.54,69.714c-27.272,0-27.272-69.714-54.544-69.714c-27.271,0-27.271,69.714-54.541,69.714
			c-27.271,0-27.271-69.714-54.542-69.714c-27.271,0-27.271,69.714-54.543,69.714c-27.273,0-27.273-69.714-54.546-69.714
			s-27.273,69.714-54.547,69.714c-27.273,0-27.273-69.714-54.545-69.714c-27.274,0-27.274,69.714-54.548,69.714
			c-27.272,0-27.272-69.714-54.545-69.714s-27.272,69.714-54.545,69.714c-27.274,0-27.274-69.714-54.548-69.714
			c-27.273,0-27.273,69.714-54.546,69.714c-27.277,0-27.277-69.714-54.554-69.714S28.987,491.559,1.71,491.559"/>
	
	
		<path fill="none" stroke="#8100FF" strokeWidth="14.3333" strokeMiterlimit="10" d="M1200.853,435.523
			c-26.086,0-26.086-62.19-52.172-62.19c-26.087,0-26.087,62.19-52.173,62.19s-26.086-62.19-52.172-62.19
			s-26.086,62.19-52.173,62.19s-26.087-62.19-52.173-62.19s-26.086,62.19-52.173,62.19c-26.085,0-26.085-62.19-52.169-62.19
			c-26.087,0-26.087,62.19-52.174,62.19c-26.085,0-26.085-62.19-52.17-62.19c-26.086,0-26.086,62.19-52.172,62.19
			c-26.085,0-26.085-62.19-52.17-62.19c-26.086,0-26.086,62.19-52.171,62.19c-26.086,0-26.086-62.19-52.172-62.19
			c-26.088,0-26.088,62.19-52.175,62.19c-26.088,0-26.088-62.19-52.176-62.19c-26.087,0-26.087,62.19-52.174,62.19
			c-26.088,0-26.088-62.19-52.177-62.19c-26.087,0-26.087,62.19-52.173,62.19c-26.087,0-26.087-62.19-52.174-62.19
			c-26.088,0-26.088,62.19-52.177,62.19c-26.088,0-26.088-62.19-52.175-62.19c-26.091,0-26.091,62.19-52.183,62.19
			s-26.091-62.19-52.182-62.19"/>
	
	
		<path fill="none" stroke="#7800FF" strokeWidth="12.6667" strokeMiterlimit="10" d="M1199.995,379.487
			c-25,0-25-54.667-50-54.667c-24.999,0-24.999,54.667-49.997,54.667c-25,0-25-54.667-50-54.667
			c-24.999,0-24.999,54.667-49.998,54.667s-24.999-54.667-49.998-54.667c-25,0-25,54.667-49.999,54.667
			c-24.997,0-24.997-54.667-49.994-54.667s-24.997,54.667-49.995,54.667c-25,0-25-54.667-50.001-54.667
			c-24.998,0-24.998,54.667-49.996,54.667c-24.999,0-24.999-54.667-49.999-54.667c-24.998,0-24.998,54.667-49.996,54.667
			c-24.999,0-24.999-54.667-49.998-54.667c-25,0-25,54.667-49.999,54.667c-25.001,0-25.001-54.667-50.001-54.667
			c-25.001,0-25.001,54.667-50.002,54.667c-25,0-25-54.667-50-54.667c-25.001,0-25.001,54.667-50.003,54.667
			c-25,0-25-54.667-50-54.667c-25,0-25,54.667-50,54.667c-25.002,0-25.002-54.667-50.003-54.667c-25,0-25,54.667-50.001,54.667
			c-25.004,0-25.004-54.667-50.008-54.667c-25.004,0-25.004,54.667-50.008,54.667"/>
	
	
		<path fill="none" stroke="#6F00FF" strokeWidth="11" strokeMiterlimit="10" d="M1199.138,323.451
			c-23.999,0-23.999-47.143-47.998-47.143s-23.999,47.143-47.999,47.143c-23.999,0-23.999-47.143-47.998-47.143
			c-24,0-24,47.143-48,47.143c-23.999,0-23.999-47.143-47.998-47.143c-24,0-24,47.143-47.999,47.143s-23.999-47.143-47.999-47.143
			c-23.997,0-23.997,47.143-47.994,47.143c-23.998,0-23.998-47.143-47.995-47.143c-24.001,0-24.001,47.143-48.001,47.143
			c-23.998,0-23.998-47.143-47.996-47.143c-24,0-24,47.143-47.999,47.143s-23.999-47.143-47.997-47.143
			c-23.999,0-23.999,47.143-47.998,47.143c-24,0-24-47.143-47.999-47.143c-24.001,0-24.001,47.143-48.001,47.143
			c-24.001,0-24.001-47.143-48.002-47.143c-24,0-24,47.143-48.001,47.143c-24.001,0-24.001-47.143-48.002-47.143
			c-24,0-24,47.143-48,47.143c-24,0-24-47.143-48.001-47.143c-24.001,0-24.001,47.143-48.003,47.143
			c-24.001,0-24.001-47.143-48.002-47.143c-24.004,0-24.004,47.143-48.008,47.143c-24.004,0-24.004-47.143-48.008-47.143"/>
	
	
		<path fill="none" stroke="#6600FF" strokeWidth="9.3333" strokeMiterlimit="10" d="M1198.28,267.415
			c-23.075,0-23.075-39.619-46.151-39.619s-23.076,39.619-46.151,39.619c-23.077,0-23.077-39.619-46.154-39.619
			c-23.075,0-23.075,39.619-46.151,39.619s-23.076-39.619-46.153-39.619c-23.076,0-23.076,39.619-46.152,39.619
			s-23.076-39.619-46.152-39.619c-23.073,0-23.073,39.619-46.147,39.619s-23.074-39.619-46.148-39.619
			c-23.075,0-23.075,39.619-46.15,39.619c-23.078,0-23.078-39.619-46.155-39.619c-23.075,0-23.075,39.619-46.15,39.619
			c-23.077,0-23.077-39.619-46.153-39.619c-23.076,0-23.076,39.619-46.151,39.619c-23.076,0-23.076-39.619-46.152-39.619
			c-23.077,0-23.077,39.619-46.153,39.619c-23.078,0-23.078-39.619-46.156-39.619c-23.079,0-23.079,39.619-46.157,39.619
			c-23.077,0-23.077-39.619-46.155-39.619c-23.079,0-23.079,39.619-46.157,39.619c-23.077,0-23.077-39.619-46.154-39.619
			c-23.078,0-23.078,39.619-46.155,39.619c-23.079,0-23.079-39.619-46.157-39.619c-23.078,0-23.078,39.619-46.156,39.619
			c-23.081,0-23.081-39.619-46.162-39.619S21.361,267.415-1.72,267.415"/>
	
	
		<path fill="none" stroke="#5D00FF" strokeWidth="7.6667" strokeMiterlimit="10" d="M1197.423,211.378
			c-22.222,0-22.222-32.096-44.442-32.096s-22.221,32.096-44.442,32.096s-22.222-32.096-44.442-32.096
			c-22.223,0-22.223,32.096-44.444,32.096s-22.222-32.096-44.442-32.096c-22.223,0-22.223,32.096-44.444,32.096
			s-22.222-32.096-44.442-32.096c-22.219,0-22.219,32.096-44.438,32.096s-22.22-32.096-44.438-32.096
			c-22.22,0-22.22,32.096-44.439,32.096c-22.221,0-22.221-32.096-44.441-32.096c-22.223,0-22.223,32.096-44.446,32.096
			c-22.221,0-22.221-32.096-44.441-32.096c-22.222,0-22.222,32.096-44.444,32.096c-22.221,0-22.221-32.096-44.442-32.096
			c-22.222,0-22.222,32.096-44.443,32.096c-22.222,0-22.222-32.096-44.444-32.096c-22.224,0-22.224,32.096-44.447,32.096
			c-22.224,0-22.224-32.096-44.447-32.096c-22.223,0-22.223,32.096-44.446,32.096c-22.221,0-22.221-32.096-44.441-32.096
			c-22.223,0-22.223,32.096-44.447,32.096s-22.224-32.096-44.447-32.096c-22.225,0-22.225,32.096-44.449,32.096
			c-22.224,0-22.224-32.096-44.448-32.096c-22.227,0-22.227,32.096-44.454,32.096c-22.227,0-22.227-32.096-44.454-32.096"/>
	
	
		<path fill="none" stroke="#5400FF" strokeWidth="6" strokeMiterlimit="10" d="M1196.565,155.342
			c-21.429,0-21.429-24.571-42.856-24.571s-21.428,24.571-42.855,24.571s-21.428-24.571-42.854-24.571
			c-21.428,0-21.428,24.571-42.855,24.571c-21.429,0-21.429-24.571-42.856-24.571s-21.428,24.571-42.855,24.571
			c-21.429,0-21.429-24.571-42.857-24.571c-21.428,0-21.428,24.571-42.855,24.571c-21.426,0-21.426-24.571-42.852-24.571
			s-21.426,24.571-42.851,24.571c-21.427,0-21.427-24.571-42.853-24.571c-21.428,0-21.428,24.571-42.854,24.571
			c-21.429,0-21.429-24.571-42.858-24.571c-21.428,0-21.428,24.571-42.854,24.571c-21.429,0-21.429-24.571-42.857-24.571
			c-21.428,0-21.428,24.571-42.855,24.571c-21.428,0-21.428-24.571-42.856-24.571c-21.429,0-21.429,24.571-42.857,24.571
			c-21.43,0-21.43-24.571-42.859-24.571c-21.43,0-21.43,24.571-42.86,24.571c-21.429,0-21.429-24.571-42.858-24.571
			c-21.427,0-21.427,24.571-42.854,24.571c-21.43,0-21.43-24.571-42.859-24.571c-21.43,0-21.43,24.571-42.86,24.571
			c-21.431,0-21.431-24.571-42.862-24.571c-21.43,0-21.43,24.571-42.86,24.571c-21.433,0-21.433-24.571-42.866-24.571
			s-21.433,24.571-42.866,24.571"/>
	
	
		<path fill="none" stroke="#4B00FF" strokeWidth="4.3333" strokeMiterlimit="10" d="M1195.709,99.307
			c-20.689,0-20.689-17.048-41.379-17.048s-20.689,17.048-41.378,17.048s-20.688-17.048-41.378-17.048
			c-20.688,0-20.688,17.048-41.377,17.048c-20.689,0-20.689-17.048-41.378-17.048c-20.689,0-20.689,17.048-41.379,17.048
			c-20.688,0-20.688-17.048-41.378-17.048s-20.689,17.048-41.379,17.048c-20.688,0-20.688-17.048-41.375-17.048
			c-20.687,0-20.687,17.048-41.373,17.048c-20.688,0-20.688-17.048-41.374-17.048c-20.688,0-20.688,17.048-41.375,17.048
			c-20.688,0-20.688-17.048-41.377-17.048c-20.69,0-20.69,17.048-41.381,17.048c-20.688,0-20.688-17.048-41.377-17.048
			c-20.689,0-20.689,17.048-41.379,17.048c-20.689,0-20.689-17.048-41.378-17.048s-20.689,17.048-41.378,17.048
			s-20.689-17.048-41.379-17.048c-20.691,0-20.691,17.048-41.382,17.048s-20.691-17.048-41.382-17.048s-20.691,17.048-41.381,17.048
			c-20.688,0-20.688-17.048-41.376-17.048c-20.691,0-20.691,17.048-41.381,17.048c-20.691,0-20.691-17.048-41.382-17.048
			c-20.692,0-20.692,17.048-41.384,17.048c-20.691,0-20.691-17.048-41.382-17.048c-20.694,0-20.694,17.048-41.389,17.048
			S16.402,82.259-4.292,82.259"/>
	
	
		<path fill="none" stroke="#4200FF" strokeWidth="2.6667" strokeMiterlimit="10" d="M1194.852,43.27c-20,0-20-9.523-40-9.523
			s-20,9.523-39.999,9.523s-19.999-9.523-39.999-9.523s-20,9.523-39.999,9.523s-19.999-9.523-39.998-9.523
			s-19.999,9.523-39.998,9.523c-20,0-20-9.523-40-9.523c-19.999,0-19.999,9.523-39.998,9.523c-20,0-20-9.523-40-9.523
			c-19.997,0-19.997,9.523-39.995,9.523s-19.998-9.523-39.995-9.523s-19.997,9.523-39.994,9.523
			c-19.998,0-19.998-9.523-39.996-9.523c-19.999,0-19.999,9.523-39.998,9.523c-20.001,0-20.001-9.523-40.001-9.523
			c-19.999,0-19.999,9.523-39.998,9.523c-20,0-20-9.523-40-9.523c-19.999,0-19.999,9.523-39.999,9.523s-20-9.523-39.999-9.523
			c-20,0-20,9.523-40,9.523c-20.001,0-20.001-9.523-40.002-9.523c-20.001,0-20.001,9.523-40.003,9.523
			c-20.001,0-20.001-9.523-40.001-9.523c-19.999,0-19.999,9.523-39.997,9.523c-20.001,0-20.001-9.523-40.002-9.523
			c-20.001,0-20.001,9.523-40.003,9.523c-20.002,0-20.002-9.523-40.004-9.523c-20.001,0-20.001,9.523-40.003,9.523
			c-20.004,0-20.004-9.523-40.009-9.523S14.856,43.27-5.148,43.27"/>
	
	
		<path fill="none" stroke="#3900FF" strokeMiterlimit="10" d="M1193.994-12.766c-19.354,0-19.354-2-38.709-2s-19.354,2-38.709,2
			s-19.354-2-38.709-2s-19.354,2-38.709,2c-19.354,0-19.354-2-38.708-2s-19.354,2-38.708,2s-19.354-2-38.708-2s-19.354,2-38.71,2
			c-19.354,0-19.354-2-38.708-2s-19.354,2-38.709,2c-19.353,0-19.353-2-38.705-2s-19.353,2-38.704,2c-19.353,0-19.353-2-38.705-2
			c-19.354,0-19.354,2-38.706,2c-19.354,0-19.354-2-38.707-2c-19.355,0-19.355,2-38.711,2c-19.354,0-19.354-2-38.708-2
			c-19.355,0-19.355,2-38.71,2c-19.354,0-19.354-2-38.708-2c-19.354,0-19.354,2-38.709,2c-19.355,0-19.355-2-38.71-2
			c-19.356,0-19.356,2-38.712,2c-19.356,0-19.356-2-38.712-2s-19.356,2-38.711,2c-19.354,0-19.354-2-38.707-2
			c-19.355,0-19.355,2-38.711,2s-19.356-2-38.712-2c-19.357,0-19.357,2-38.714,2c-19.356,0-19.356-2-38.713-2
			c-19.359,0-19.359,2-38.718,2s-19.359-2-38.718-2"/>
    </svg>
</Junk>	
    )
}

export default Svg

