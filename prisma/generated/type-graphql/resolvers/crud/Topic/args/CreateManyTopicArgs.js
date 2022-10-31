"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateManyInput_1 = require("../../../inputs/TopicCreateManyInput");
let CreateManyTopicArgs = class CreateManyTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicCreateManyInput_1.TopicCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTopicArgs.prototype, "data", void 0);
CreateManyTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTopicArgs);
exports.CreateManyTopicArgs = CreateManyTopicArgs;
