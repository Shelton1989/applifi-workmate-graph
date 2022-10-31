"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreatecreatorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreatecreatorsInput = class TopicCreatecreatorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreatecreatorsInput.prototype, "set", void 0);
TopicCreatecreatorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreatecreatorsInput", {
        isAbstract: true
    })
], TopicCreatecreatorsInput);
exports.TopicCreatecreatorsInput = TopicCreatecreatorsInput;
