import React from 'react'
import { useIdleTimer} from 'react-idle-timer';

import { Form } from '../components/FormComponents/Form'
import { UserList } from '../components/FormComponents/UserList'
import { Header } from '../components/Header'
import { useMembers } from '../hooks/useMembers'

export const FormScreen = () => {

	const { states, stateUpdaters } = useMembers();
	const { members } = states;
    const { addMember, loadMembers } = stateUpdaters;

	const onIdle = () => {
		console.log('You are not using this.')
		loadMembers();
		reset();
	}

	const onActive = (event) => {
		// Close Modal Prompt
		// Do some active action
	}
	
	const {
		reset,
	  } = useIdleTimer({
		onIdle,
		onActive,
		timeout: 1000 * 60 * 2,
		promptTimeout: 0,
		events: [
		  'mousemove',
		  'keydown',
		  'wheel',
		  'DOMMouseScroll',
		  'mousewheel',
		  'mousedown',
		  'touchstart',
		  'touchmove',
		  'MSPointerDown',
		  'MSPointerMove',
		  'visibilitychange'
		],
		immediateEvents: [],
		debounce: 0,
		throttle: 0,
		eventsThrottle: 200,
		element: document,
		startOnMount: true,
		startManually: false,
		stopOnIdle: false,
		crossTab: false,
		syncTimers: 0
	  })

    return (
		<div>
			<Header />
			<div className = ' formscreen_container '>
				<div className = ' formscreen_section '>
					<Form members = { members } addMember = { addMember }/>
				</div>
				<div className = ' formscreen_section '>
					<UserList members = { members } />
				</div>
			</div>
		</div>
    )
}
