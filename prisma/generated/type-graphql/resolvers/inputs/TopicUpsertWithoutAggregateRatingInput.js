"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpsertWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateWithoutAggregateRatingInput");
const TopicUpdateWithoutAggregateRatingInput_1 = require("../inputs/TopicUpdateWithoutAggregateRatingInput");
let TopicUpsertWithoutAggregateRatingInput = class TopicUpsertWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutAggregateRatingInput_1.TopicUpdateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutAggregateRatingInput_1.TopicUpdateWithoutAggregateRatingInput)
], TopicUpsertWithoutAggregateRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput)
], TopicUpsertWithoutAggregateRatingInput.prototype, "create", void 0);
TopicUpsertWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpsertWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicUpsertWithoutAggregateRatingInput);
exports.TopicUpsertWithoutAggregateRatingInput = TopicUpsertWithoutAggregateRatingInput;
