import { ISelectOption, ItemType, keyable } from '@/@types/global';
import { colorable, inputable, sizeable, variantable } from '@/mixins';
import { defineComponent, PropType, withModifiers } from 'vue';
import IconChevronDown from '../icons/IconChevronDown';
import WInput from './WInput';

export default defineComponent({
	name: 'w-select',
	props: {
		items: {
			type: Array as PropType<Array<ItemType>>,

			default: [],
		},
		itemLabel: { type: String, default: 'label' },
		itemValue: { type: String, default: 'value' },
	},
	mixins: [inputable, colorable, sizeable, variantable],

	data() {
		return {
			showDropdown: true,
			selected: { label: '' },
		};
	},
	components: {
		WInput,
	},
	created() {},
	methods: {
		selectOption(option: ISelectOption) {
			console.log('------option-------------');
			console.log(option);
			console.log('--------------------');
			this.selected = option;
		
				this.showDropdown = false;

		},
	},
	computed: {
		options(): Array<ISelectOption> | undefined {
			if (this.items.every((item: ItemType) => ['number', 'string'].includes(typeof item))) {
				return this.items.map(
					(_item: ItemType): ISelectOption => {
						return {
							label: _item.toString(),
							value: _item,
						};
					}
				);
			} else if (this.items.every((item: ItemType) => typeof item === 'object')) {
				return this.items.map((_item: ItemType) => {
					return {
						label: (_item as keyable)[this.itemLabel],
						value: (_item as keyable)[this.itemValue],
					};
				});
			} else {
				throw 'The items structure is incorrect !';
			}
		},
	},

	render() {
		return (
			<div class="relative">
				<w-input
					v-model={this.selected.label}
					placeholder={this.placeholder}
					label={this.label}
					v-slots={{
						append: () => (
							<span onClick={() => (this.showDropdown = true)}>
								<IconChevronDown />
							</span>
						),
					}}
					onFocus={() => (this.showDropdown = true)}
					// onBlur={() => (this.showDropdown = false)}
				></w-input>
			
					
						<div class={[{'h-52 ring-1':this.showDropdown},'shadow-md overflow-hidden bg-white ring-0 ring-gray-200 rounded  h-0 transition-all duration-200']}>
							<ul class="">
								{this.options?.map((option: ISelectOption, i) => {
									return (
										<li
											class="py-2 pl-3 hover:bg-gray-200 cursor-pointer"
											key={i}
											onClick={withModifiers(() => this.selectOption(option),['stop'])}
											// onClick={()=>console.log("option ",option)}

										>
											{option.label}
										</li>
									);
								})}
							</ul>
						</div>
					
			
			</div>
		);
	},
});
