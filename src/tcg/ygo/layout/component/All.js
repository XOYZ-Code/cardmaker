define([
	"./CardName",
	"./Attribute",
	"./Border",
	"./Image",
	"./Level",
	"./Type",
	"./Effect",
	"./Atk",
	"./Def",
	"./Pendulum",
	"./Link",
	"./Serial",
	"./Copyright",
	"./LinkMarkers"
], function ygo_template_all(CardName, Attribute, Border, Image, Level, Type, Effect, Atk, Def, Pendulum, Link, Serial, Copyright, LinkMarkers)
{
	return {
		CardName: CardName,
		Attribute: Attribute,
		Border: Border,
		Image: Image,
		Level: Level,
		Type: Type,
		Effect: Effect,
		Atk: Atk,
		Def: Def,
		Pendulum: Pendulum,
		Link: Link,
		Serial: Serial,
		Copyright: Copyright,
		LinkMarkers: LinkMarkers
	};
});
