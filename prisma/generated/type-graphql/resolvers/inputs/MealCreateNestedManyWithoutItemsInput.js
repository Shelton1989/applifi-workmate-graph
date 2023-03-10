"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedManyWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutItemsInput_1 = require("../inputs/MealCreateOrConnectWithoutItemsInput");
const MealCreateWithoutItemsInput_1 = require("../inputs/MealCreateWithoutItemsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedManyWithoutItemsInput = class MealCreateNestedManyWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutItemsInput_1.MealCreateOrConnectWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutItemsInput.prototype, "connect", void 0);
MealCreateNestedManyWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedManyWithoutItemsInput", {
        isAbstract: true
    })
], MealCreateNestedManyWithoutItemsInput);
exports.MealCreateNestedManyWithoutItemsInput = MealCreateNestedManyWithoutItemsInput;
