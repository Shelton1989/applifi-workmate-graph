"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdatedirectorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdatedirectorsInput = class TopicUpdatedirectorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatedirectorsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatedirectorsInput.prototype, "push", void 0);
TopicUpdatedirectorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdatedirectorsInput", {
        isAbstract: true
    })
], TopicUpdatedirectorsInput);
exports.TopicUpdatedirectorsInput = TopicUpdatedirectorsInput;
