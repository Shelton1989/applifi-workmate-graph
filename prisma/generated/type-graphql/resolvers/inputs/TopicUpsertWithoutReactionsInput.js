"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutReactionsInput_1 = require("../inputs/TopicCreateWithoutReactionsInput");
const TopicUpdateWithoutReactionsInput_1 = require("../inputs/TopicUpdateWithoutReactionsInput");
let TopicUpsertWithoutReactionsInput = class TopicUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutReactionsInput_1.TopicUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutReactionsInput_1.TopicUpdateWithoutReactionsInput)
], TopicUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput)
], TopicUpsertWithoutReactionsInput.prototype, "create", void 0);
TopicUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], TopicUpsertWithoutReactionsInput);
exports.TopicUpsertWithoutReactionsInput = TopicUpsertWithoutReactionsInput;
