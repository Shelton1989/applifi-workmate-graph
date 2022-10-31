"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreatecastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreatecastInput = class TopicCreatecastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreatecastInput.prototype, "set", void 0);
TopicCreatecastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreatecastInput", {
        isAbstract: true
    })
], TopicCreatecastInput);
exports.TopicCreatecastInput = TopicCreatecastInput;
