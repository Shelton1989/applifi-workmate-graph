"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdatecastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdatecastInput = class TopicUpdatecastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatecastInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatecastInput.prototype, "push", void 0);
TopicUpdatecastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdatecastInput", {
        isAbstract: true
    })
], TopicUpdatecastInput);
exports.TopicUpdatecastInput = TopicUpdatecastInput;
