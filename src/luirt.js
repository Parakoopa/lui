import {
	hook_assert,
	hook_async,
	hook_await,
	hook_callback,
	hook_delay,
	hook_dom,
	hook_effect,
	hook_first,
	hook_memo,
	hook_object_changes,
	hook_prev,
	hook_reducer,
	hook_reducer_f,
	hook_rerender,
	hook_state,
	hook_static,
	hook_transition,
	init,
	node,
	node_dom,
	node_list,
	now,
	window_
} from './lui.js';

window_['lui'] = {
	hook_assert,
	hook_async,
	hook_await,
	hook_callback,
	hook_delay,
	hook_dom,
	hook_effect,
	hook_first,
	hook_memo,
	hook_object_changes,
	hook_prev,
	hook_reducer,
	hook_reducer_f,
	hook_rerender,
	hook_state,
	hook_static,
	hook_transition,
	init,
	node,
	node_dom,
	node_list,
	now
};
