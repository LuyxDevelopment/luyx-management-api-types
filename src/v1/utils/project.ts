
export const ProjectStages = [
	'complete',
	'payment',
	'testing',
	'development',
	'pending',
] as const;

/**
 * In order of completely finished to waiting to begin
 * 
 * complete - Project is completed AND paid for
 * 
 * payment - Project is completed but needs to be paid for
 * 
 * testing - Project is in final testing stage
 * 
 * development - Project structure is in progress
 * 
 * pending - Project is initialized but waiting to start
 */
export type ProjectStage = typeof ProjectStages[number];