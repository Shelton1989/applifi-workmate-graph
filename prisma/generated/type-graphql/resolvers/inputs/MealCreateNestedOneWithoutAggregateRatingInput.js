"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/MealCreateOrConnectWithoutAggregateRatingInput");
const MealCreateWithoutAggregateRatingInput_1 = require("../inputs/MealCreateWithoutAggregateRatingInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutAggregateRatingInput = class MealCreateNestedOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput)
], MealCreateNestedOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutAggregateRatingInput_1.MealCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutAggregateRatingInput_1.MealCreateOrConnectWithoutAggregateRatingInput)
], MealCreateNestedOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutAggregateRatingInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutAggregateRatingInput);
exports.MealCreateNestedOneWithoutAggregateRatingInput = MealCreateNestedOneWithoutAggregateRatingInput;
