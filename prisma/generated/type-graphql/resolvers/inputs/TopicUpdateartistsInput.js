"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateartistsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdateartistsInput = class TopicUpdateartistsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateartistsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateartistsInput.prototype, "push", void 0);
TopicUpdateartistsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateartistsInput", {
        isAbstract: true
    })
], TopicUpdateartistsInput);
exports.TopicUpdateartistsInput = TopicUpdateartistsInput;
