"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateOneWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutMealInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutMealInput");
const AggregateRatingCreateWithoutMealInput_1 = require("../inputs/AggregateRatingCreateWithoutMealInput");
const AggregateRatingUpdateWithoutMealInput_1 = require("../inputs/AggregateRatingUpdateWithoutMealInput");
const AggregateRatingUpsertWithoutMealInput_1 = require("../inputs/AggregateRatingUpsertWithoutMealInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingUpdateOneWithoutMealInput = class AggregateRatingUpdateOneWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutMealInput_1.AggregateRatingCreateOrConnectWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutMealInput_1.AggregateRatingCreateOrConnectWithoutMealInput)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpsertWithoutMealInput_1.AggregateRatingUpsertWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpsertWithoutMealInput_1.AggregateRatingUpsertWithoutMealInput)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutMealInput_1.AggregateRatingUpdateWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutMealInput_1.AggregateRatingUpdateWithoutMealInput)
], AggregateRatingUpdateOneWithoutMealInput.prototype, "update", void 0);
AggregateRatingUpdateOneWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateOneWithoutMealInput", {
        isAbstract: true
    })
], AggregateRatingUpdateOneWithoutMealInput);
exports.AggregateRatingUpdateOneWithoutMealInput = AggregateRatingUpdateOneWithoutMealInput;
