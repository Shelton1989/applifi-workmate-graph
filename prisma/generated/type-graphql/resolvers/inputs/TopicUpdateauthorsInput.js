"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateauthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdateauthorsInput = class TopicUpdateauthorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateauthorsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateauthorsInput.prototype, "push", void 0);
TopicUpdateauthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateauthorsInput", {
        isAbstract: true
    })
], TopicUpdateauthorsInput);
exports.TopicUpdateauthorsInput = TopicUpdateauthorsInput;
