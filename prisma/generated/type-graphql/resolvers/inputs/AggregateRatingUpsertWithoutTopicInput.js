"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpsertWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateWithoutTopicInput");
const AggregateRatingUpdateWithoutTopicInput_1 = require("../inputs/AggregateRatingUpdateWithoutTopicInput");
let AggregateRatingUpsertWithoutTopicInput = class AggregateRatingUpsertWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutTopicInput_1.AggregateRatingUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutTopicInput_1.AggregateRatingUpdateWithoutTopicInput)
], AggregateRatingUpsertWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput)
], AggregateRatingUpsertWithoutTopicInput.prototype, "create", void 0);
AggregateRatingUpsertWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpsertWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingUpsertWithoutTopicInput);
exports.AggregateRatingUpsertWithoutTopicInput = AggregateRatingUpsertWithoutTopicInput;
