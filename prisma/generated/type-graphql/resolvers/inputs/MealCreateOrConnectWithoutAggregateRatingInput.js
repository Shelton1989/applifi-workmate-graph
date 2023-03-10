"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutAggregateRatingInput_1 = require("../inputs/MealCreateWithoutAggregateRatingInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutAggregateRatingInput = class MealCreateOrConnectWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutAggregateRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput)
], MealCreateOrConnectWithoutAggregateRatingInput.prototype, "create", void 0);
MealCreateOrConnectWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutAggregateRatingInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutAggregateRatingInput);
exports.MealCreateOrConnectWithoutAggregateRatingInput = MealCreateOrConnectWithoutAggregateRatingInput;
