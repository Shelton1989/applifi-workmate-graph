"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreatedirectorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreatedirectorsInput = class TopicCreatedirectorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreatedirectorsInput.prototype, "set", void 0);
TopicCreatedirectorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreatedirectorsInput", {
        isAbstract: true
    })
], TopicCreatedirectorsInput);
exports.TopicCreatedirectorsInput = TopicCreatedirectorsInput;
