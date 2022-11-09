Vue.component("site-navigation", {
    props: [ 'mega', 'level3', 'level4', 'level5', 'products'
    ],
    template: ''
});

var nav = new Vue ({
    el: '#site-navigation',
    data: {
      mega: false,
      level3: '',
			level4: '',
			level5: '',
      products: [
				{ 
					url: '#!', 
					title: 'Product 1',
					categories: [ 
						 { sub_url: '#!', sub_title: 'Product 1A',
                            subcategories: [
                                { title: 'Product 1A Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1A Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1A Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1A Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 1B',
                            subcategories: [
                                { title: 'Product 1B Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1B Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1B Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1B Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 1C',
                            subcategories: [
                                { title: 'Product 1C Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1C Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1C Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1C Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						 { sub_url: '#!', sub_title: 'Product 1D',
                            subcategories: [
                                { title: 'Product 1D Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1D Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1D Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 1D Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						}
					] 
				},
				{ 
					url: '#!', 
					title: 'Product 2',
					categories: [ 
						{ sub_url: '#!', sub_title: 'Product 2A',
                            subcategories: [
                                    { title: 'Product 2A Red',
                                        items: [
                                            { title: 'Red Circle', url: '#'},
                                            { title: 'Red Square', url: '#'},
                                            { title: 'Red Triangle', url: '#'},
                                            { title: 'Red Rectangle', url: '#'}
                                        ]
                                    },
                                    { title: 'Product 2A Blue',
                                        items: [
                                            { title: 'Blue Circle', url: '#'},
                                            { title: 'Blue Square', url: '#'},
                                            { title: 'Blue Triangle', url: '#'},
                                            { title: 'Blue Rectangle', url: '#'}
                                        ]
                                    },
                                    { title: 'Product 2A Green',
                                        items: [
                                            { title: 'Green Circle', url: '#'},
                                            { title: 'Green Square', url: '#'},
                                            { title: 'Green Triangle', url: '#'},
                                            { title: 'Green Rectangle', url: '#'}
                                        ]
                                    },
                                    { title: 'Product 2A Yellow',
                                        items: [
                                            { title: 'Green Circle', url: '#'},
                                            { title: 'Green Square', url: '#'},
                                            { title: 'Green Triangle', url: '#'},
                                            { title: 'Green Rectangle', url: '#'}
                                        ]
                                    }
                                ]
						},
						{ sub_url: '#!', sub_title: 'Product 2B',
						subcategories: [
                            
								{ title: 'Product 2B Red',
									items: [
										{ title: 'Red Circle', url: '#'},
										{ title: 'Red Square', url: '#'},
										{ title: 'Red Triangle', url: '#'},
										{ title: 'Red Rectangle', url: '#'}
									]
                                },
                                { title: 'Product 2B Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 2B Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 2B Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
							]
						},
						{ sub_url: '#!', sub_title: 'Product 2C',
                        subcategories: [
                            { title: 'Product 2C Red',
                                items: [
                                    { title: 'Red Circle', url: '#'},
                                    { title: 'Red Square', url: '#'},
                                    { title: 'Red Triangle', url: '#'},
                                    { title: 'Red Rectangle', url: '#'}
                                ]
                            },
                            { title: 'Product 2C Blue',
                                items: [
                                    { title: 'Blue Circle', url: '#'},
                                    { title: 'Blue Square', url: '#'},
                                    { title: 'Blue Triangle', url: '#'},
                                    { title: 'Blue Rectangle', url: '#'}
                                ]
                            },
                            { title: 'Product 2C Green',
                                items: [
                                    { title: 'Green Circle', url: '#'},
                                    { title: 'Green Square', url: '#'},
                                    { title: 'Green Triangle', url: '#'},
                                    { title: 'Green Rectangle', url: '#'}
                                ]
                            },
                            { title: 'Product 2C Yellow',
                                items: [
                                    { title: 'Green Circle', url: '#'},
                                    { title: 'Green Square', url: '#'},
                                    { title: 'Green Triangle', url: '#'},
                                    { title: 'Green Rectangle', url: '#'}
                                ]
                            }
                        ]
						},
						{ sub_url: '#!', sub_title: 'Product 2D',
                            subcategories: [
                                { title: 'Product 2D Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 2D Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 2D Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 2D Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						}
					] 
				}, 
				{ 
					url: '#!', 
					title: 'Product 3',
					categories: [ 
						{ sub_url: '#!', sub_title: 'Product 3A',
                            subcategories: [
                                { title: 'Product 3A Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3A Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3A Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3A Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 3B',
                            subcategories: [
                                { title: 'Product 3B Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3B Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3B Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3B Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 3C',
                            subcategories: [
                                { title: 'Product 3C Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3C Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3C Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3C Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 3D',
                            subcategories: [
                                { title: 'Product 3D Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3D Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3D Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 3D Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						}
					] 
				}, 
                { 
					url: '#!', 
					title: 'Product 4',
					categories: [ 
						{ sub_url: '#!', sub_title: 'Product 4A',
                            subcategories: [
                                { title: 'Product 4A Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4A Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4A Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4A Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 4B',
                            subcategories: [
                                { title: 'Product 4B Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4B Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4B Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4B Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 4C',
                            subcategories: [
                                { title: 'Product 4C Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4C Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4C Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4C Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						},
						{ sub_url: '#!', sub_title: 'Product 4D',
                            subcategories: [
                                { title: 'Product 4D Red',
                                    items: [
                                        { title: 'Red Circle', url: '#'},
                                        { title: 'Red Square', url: '#'},
                                        { title: 'Red Triangle', url: '#'},
                                        { title: 'Red Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4D Blue',
                                    items: [
                                        { title: 'Blue Circle', url: '#'},
                                        { title: 'Blue Square', url: '#'},
                                        { title: 'Blue Triangle', url: '#'},
                                        { title: 'Blue Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4D Green',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                },
                                { title: 'Product 4D Yellow',
                                    items: [
                                        { title: 'Green Circle', url: '#'},
                                        { title: 'Green Square', url: '#'},
                                        { title: 'Green Triangle', url: '#'},
                                        { title: 'Green Rectangle', url: '#'}
                                    ]
                                }
                            ]
						}
					]
                }
            ]
        }, methods: {
					// Reset all variables upon leaving mega menu area
					levelReset: function(e) {
						this.level3 = ''
					}
    }
})