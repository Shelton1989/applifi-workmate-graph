"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/MealCreateOrConnectWithoutAggregateRatingInput");
const MealCreateWithoutAggregateRatingInput_1 = require("../inputs/MealCreateWithoutAggregateRatingInput");
const MealUpdateWithoutAggregateRatingInput_1 = require("../inputs/MealUpdateWithoutAggregateRatingInput");
const MealUpsertWithoutAggregateRatingInput_1 = require("../inputs/MealUpsertWithoutAggregateRatingInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneWithoutAggregateRatingInput = class MealUpdateOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutAggregateRatingInput_1.MealCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutAggregateRatingInput_1.MealCreateOrConnectWithoutAggregateRatingInput)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutAggregateRatingInput_1.MealUpsertWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutAggregateRatingInput_1.MealUpsertWithoutAggregateRatingInput)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutAggregateRatingInput_1.MealUpdateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutAggregateRatingInput_1.MealUpdateWithoutAggregateRatingInput)
], MealUpdateOneWithoutAggregateRatingInput.prototype, "update", void 0);
MealUpdateOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], MealUpdateOneWithoutAggregateRatingInput);
exports.MealUpdateOneWithoutAggregateRatingInput = MealUpdateOneWithoutAggregateRatingInput;
