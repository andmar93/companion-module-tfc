import type { TfcRouteInstance } from './main.js'

export function UpdateVariableDefinitions(self: TfcRouteInstance): void {
	const variableArray = [...self.panel.sources, ...self.panel.targets]
		.sort((a, b) => a?.index! - b?.index!)
		.map((sourceTarget) => {
			return {
				variableId: `sectionIndex${sourceTarget?.index}`,
				name: `Section Index ${sourceTarget?.index}`,
				value: sourceTarget?.name,
			}
		})

	// Add target source variables for each target and level (showing source NAME)
	const targetSourceVariables = self.panel.targets
		.filter((target) => target !== undefined)
		.flatMap((target) => {
			return target!.sources.map((source) => {
				// Find the source name by matching the source id
				const sourceName = self.panel.sources.find((s) => s?.id === source.id)?.name || 'Unknown'
				return {
					variableId: `target_${target!.index}_${source.level}_source`,
					name: `Target ${target!.index} ${source.level} Source`,
					value: sourceName,
				}
			})
		})

	// Add target source INDEX variables for each target and level (showing source SECTIONINDEX)
	const targetSourceIndexVariables = self.panel.targets
		.filter((target) => target !== undefined)
		.flatMap((target) => {
			return target!.sources.map((source) => {
				// Find the source index by matching the source id
				const sourceIndex = self.panel.sources.find((s) => s?.id === source.id)?.index
				const sourceIndexValue = sourceIndex !== undefined ? sourceIndex.toString() : 'Unknown'
				return {
					variableId: `target_${target!.index}_${source.level}_source_index`,
					name: `Target ${target!.index} ${source.level} Source Index`,
					value: sourceIndexValue,
				}
			})
		})

	variableArray.push(...targetSourceVariables)
	variableArray.push(...targetSourceIndexVariables)

	const variableObject: { [key: string]: string } = {}
	variableArray.forEach((sourceTarget) => {
		if (sourceTarget !== undefined && sourceTarget.variableId !== undefined) {
			variableObject[sourceTarget.variableId] = sourceTarget.value!
		}
	})

	self.setVariableDefinitions(variableArray)
	self.setVariableValues(variableObject)
}